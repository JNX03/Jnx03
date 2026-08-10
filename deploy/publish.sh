#!/usr/bin/env bash
# Build the static export and publish it to the VPS.
#   ./deploy/publish.sh
#
# Requires key-based SSH to $HOST as $USER. Nothing else is installed or changed
# on the server; this only replaces the contents of $DOCROOT.
set -euo pipefail

HOST="${HOST:-72.62.41.174}"
USER="${USER_SSH:-root}"
DOCROOT="/var/www/jnx03.xyz"

cd "$(dirname "$0")/.."

echo "==> Building static export"
npm run build

if [ ! -f out/index.html ]; then
  echo "!! out/index.html missing; build did not produce an export" >&2
  exit 1
fi

echo "==> Publishing to $USER@$HOST:$DOCROOT"
# Upload to a staging dir, then swap, so the live site is never half-written.
tar -czf - -C out . | ssh "$USER@$HOST" "
  set -e
  rm -rf $DOCROOT.new
  mkdir -p $DOCROOT.new
  tar -xzf - -C $DOCROOT.new
  chown -R www-data:www-data $DOCROOT.new
  rm -rf $DOCROOT.old
  [ -d $DOCROOT ] && mv $DOCROOT $DOCROOT.old || true
  mv $DOCROOT.new $DOCROOT
  rm -rf $DOCROOT.old
"

echo "==> Verifying"
for p in / /works /awards /research /about /stack /contact /sitemap.xml; do
  code=$(curl -s -o /dev/null -w '%{http_code}' --resolve "jnx03.xyz:443:$HOST" "https://jnx03.xyz$p" || echo 000)
  printf '  %-14s %s\n' "$p" "$code"
done

echo "==> Done"
