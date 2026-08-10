# Self-hosting on a VPS

The site builds to a standalone Node server (`output: "standalone"`), runs in Docker
on `127.0.0.1:3000`, and sits behind nginx which terminates TLS.

## First run

```bash
# on the VPS, as a non-root user in the docker group
sudo mkdir -p /srv/jnx03 && sudo chown "$USER" /srv/jnx03
git clone https://github.com/JNX03/JNX03.git /srv/jnx03
cd /srv/jnx03

docker compose up -d --build
curl -I http://127.0.0.1:3000/          # expect 200
```

## nginx and TLS

```bash
sudo cp deploy/nginx.conf /etc/nginx/sites-available/jnx03.xyz
sudo ln -s /etc/nginx/sites-available/jnx03.xyz /etc/nginx/sites-enabled/
sudo certbot --nginx -d jnx03.xyz -d www.jnx03.xyz
sudo nginx -t && sudo systemctl reload nginx
```

Certbot installs its own renewal timer; confirm with `systemctl list-timers | grep certbot`.

## Auto-start on boot

Docker's `restart: unless-stopped` already handles this. If you would rather have
systemd own the lifecycle:

```bash
sudo cp deploy/jnx03.service /etc/systemd/system/
sudo systemctl enable --now jnx03
```

## Updating

```bash
cd /srv/jnx03 && ./deploy/deploy.sh
```

The script pulls `origin/main`, rebuilds, restarts, waits for the health check, and
rolls no further if the container fails to answer within 30 seconds.

## DNS

Point the apex and `www` at the VPS, then let the nginx config redirect `www` to the
apex so search engines only ever index one hostname.

| Record | Name | Value |
| --- | --- | --- |
| `A` | `@` | *VPS IPv4* |
| `AAAA` | `@` | *VPS IPv6, if you have one* |
| `CNAME` | `www` | `jnx03.xyz.` |

## Firewall

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

Port 3000 is bound to loopback in `docker-compose.yml`, so it is never reachable from
outside regardless of firewall state.

## Cutting over from Vercel

Do it in this order so the site is never down:

1. Bring the VPS up and verify it over its raw IP or a temporary subdomain.
2. Lower the DNS TTL on the existing records to 300s and wait for the old TTL to lapse.
3. Repoint `A`/`AAAA` at the VPS.
4. Watch until traffic is served by nginx (`curl -sI https://jnx03.xyz | grep -i server`).
5. Only then remove the project from Vercel.
