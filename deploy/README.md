# Moving jnx03.xyz from Vercel to your VPS

The site builds to a standalone Node server (`output: "standalone"`), runs in Docker bound
to `127.0.0.1:3000`, and sits behind nginx which terminates TLS.

Do the steps in this order. The site stays up the whole way, and Vercel is not touched
until the VPS is already serving real traffic.

---

## 0. Push the code (on your machine)

The VPS clones from GitHub, so the commits have to be there first.

```bash
git push origin main
```

## 1. Provision the VPS

Ubuntu 22.04 or 24.04, as a non-root user with sudo.

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y nginx certbot python3-certbot-nginx ufw git

# Docker engine + compose plugin
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker "$USER"
newgrp docker            # or log out and back in

sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable
```

## 2. Clone and start

```bash
sudo mkdir -p /srv/jnx03 && sudo chown "$USER" /srv/jnx03
git clone https://github.com/JNX03/Jnx03.git /srv/jnx03
cd /srv/jnx03
chmod +x deploy/deploy.sh

docker compose up -d --build
curl -I http://127.0.0.1:3000/          # expect: HTTP/1.1 200 OK
```

If that 200s, the app itself is done. Everything below is routing.

## 3. Verify before you touch DNS

Confirm the VPS serves the real site while `jnx03.xyz` is still pointing at Vercel.

```bash
# from the VPS
for p in / /works /awards /research /about /stack /contact /sitemap.xml; do
  printf '%-14s %s\n' "$p" "$(curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:3000$p)"
done
```

All eight should print `200`.

## 4. nginx and TLS

`deploy/nginx.conf` expects certificates to already exist, so issue them first using the
standalone challenge, then install the config.

```bash
sudo cp deploy/nginx.conf /etc/nginx/sites-available/jnx03.xyz
sudo ln -sf /etc/nginx/sites-available/jnx03.xyz /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# DNS must already resolve to this box for certbot to validate, so if you have not
# cut over yet, use --webroot after step 5 instead, or issue with a DNS challenge.
sudo certbot --nginx -d jnx03.xyz -d www.jnx03.xyz

sudo nginx -t && sudo systemctl reload nginx
```

Certbot installs its own renewal timer. Confirm with `systemctl list-timers | grep certbot`.

## 5. DNS cutover

`jnx03.xyz` is registered **outside** Vercel ("Third Party" in the Vercel domains list), so
this is done at your registrar and does not depend on Vercel at all.

1. Lower the TTL on the existing `A`/`AAAA` records to `300`, and wait for the *old* TTL
   to lapse. Skipping this is what causes long cutover tails.
2. Repoint:

   | Record | Name | Value |
   | --- | --- | --- |
   | `A` | `@` | *VPS IPv4* |
   | `AAAA` | `@` | *VPS IPv6, if you have one* |
   | `CNAME` | `www` | `jnx03.xyz.` |

   Remove the old Vercel `A`/`CNAME` records for `@` and `www`.
3. Watch until your box is answering:

   ```bash
   dig +short jnx03.xyz
   curl -sI https://jnx03.xyz | grep -i '^server:'      # expect nginx, not Vercel
   ```

The nginx config redirects `www` to the apex, so search engines only ever index one
hostname.

## 6. Only now, remove from Vercel

Once `curl -sI https://jnx03.xyz` has shown nginx for a day or so:

- Vercel dashboard → project **`profile`** → Settings → Domains → remove `jnx03.xyz`
  and `www.jnx03.xyz`.
- Settings → Git → disconnect `JNX03/Jnx03`, so pushes stop triggering builds.
- Settings → General → bottom → Delete Project.

Leave every other project alone — `dekport`, `ving-vis`, `gc-minerva`, `tnd`, `indexweb`
and `notex` are unrelated and share the account.

---

## Updating the site later

```bash
cd /srv/jnx03 && ./deploy/deploy.sh
```

The script resets to `origin/main`, rebuilds, restarts, and polls the health check for 30
seconds. If the container does not answer it prints the last 50 log lines and exits
non-zero, leaving the previous image on disk.

## Auto-start on boot

Docker's `restart: unless-stopped` already covers reboots. If you would rather systemd
own it:

```bash
sudo cp deploy/jnx03.service /etc/systemd/system/
sudo systemctl enable --now jnx03
```

## Troubleshooting

| Symptom | Check |
| --- | --- |
| 502 from nginx | `docker compose ps`, then `docker compose logs web` |
| Container restarts in a loop | `docker compose logs --tail=100 web` |
| Certbot fails to validate | DNS must already point at the VPS; `dig +short jnx03.xyz` |
| Port 3000 reachable externally | It should not be. `docker compose ps` must show `127.0.0.1:3000->3000/tcp` |
