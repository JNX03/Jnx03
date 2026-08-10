#!/usr/bin/env bash
# Pull the latest commit and restart the site. Run on the VPS:
#   cd /srv/jnx03 && ./deploy/deploy.sh
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> Fetching latest main"
git fetch --prune origin
git reset --hard origin/main

echo "==> Building image"
docker compose build

echo "==> Restarting"
docker compose up -d

echo "==> Waiting for health"
for i in $(seq 1 30); do
  if curl -fsS -o /dev/null http://127.0.0.1:3000/; then
    echo "==> Up after ${i}s"
    docker image prune -f >/dev/null
    exit 0
  fi
  sleep 1
done

echo "!! Site did not come up in 30s; last logs:" >&2
docker compose logs --tail=50 web >&2
exit 1
