# Hosting

`jnx03.xyz` is a Next.js **static export** (`output: "export"`) served by nginx on the
VPS at `72.62.41.174`. There is no Node process and no container: `npm run build` emits
plain files into `out/`, and those files are the site.

DNS is managed in Cloudflare. The apex `A` record points at the VPS; `www` is a CNAME to
the apex and nginx redirects it there, so only one hostname is ever indexed.

## Layout on the server

| Path | What |
| --- | --- |
| `/var/www/jnx03.xyz` | document root |
| `/etc/nginx/sites-available/jnx03.xyz` | vhost (`deploy/nginx/jnx03.xyz.conf`) |
| `/etc/nginx/snippets/jnx03-common.conf` | shared security headers |
| `/usr/local/bin/jnx03-deploy` | forced command for the CI key |
| `/etc/letsencrypt/live/jnx03.xyz/` | certbot cert, auto-renewing |

## Automatic deploys

`.github/workflows/deploy.yml` builds on every push to `main` and publishes to the VPS.
It skips pushes that only touch `metrics*.svg` or `README.md`, so the metrics bot does
not trigger a rebuild several times a day.

It needs three repository secrets — **Settings → Secrets and variables → Actions**:

| Secret | Value |
| --- | --- |
| `VPS_HOST` | `72.62.41.174` |
| `VPS_USER` | `root` |
| `VPS_SSH_KEY` | contents of the private deploy key (see below) |

### About the deploy key

The CI key is **not** a general-purpose root key. Its entry in
`/root/.ssh/authorized_keys` is pinned with:

```
command="/usr/local/bin/jnx03-deploy",restrict <public key>
```

so anything that authenticates with it runs only the deploy script — it cannot get a
shell, forward ports, or read files. The script refuses any upload that does not contain
an `index.html`, and swaps the new tree into place only after it has been fully written.

To rotate the key:

```bash
ssh-keygen -t ed25519 -N "" -C "github-actions-deploy@jnx03.xyz" -f ./jnx03_ci
ssh root@72.62.41.174 \
  "sed -i '/github-actions-deploy@jnx03.xyz/d' /root/.ssh/authorized_keys && \
   echo 'command=\"/usr/local/bin/jnx03-deploy\",restrict $(cat ./jnx03_ci.pub)' \
   >> /root/.ssh/authorized_keys"
# then paste ./jnx03_ci into the VPS_SSH_KEY secret and delete the local copy
```

## Manual deploy

If you need to publish without going through CI:

```bash
./deploy/publish.sh
```

## Changing the nginx config

`deploy/nginx/` is the source of truth. After editing:

```bash
scp deploy/nginx/jnx03.xyz.conf   root@72.62.41.174:/etc/nginx/sites-available/jnx03.xyz
scp deploy/nginx/jnx03-common.conf root@72.62.41.174:/etc/nginx/snippets/jnx03-common.conf
ssh root@72.62.41.174 'nginx -t && systemctl reload nginx'
```

Note the box also serves dekport, finfinfx and others — always `nginx -t` before reloading.

## Rolling back to Vercel

Set the Cloudflare apex `A` record back to `76.76.21.21`. Nothing else is required; the
Vercel project still exists.
