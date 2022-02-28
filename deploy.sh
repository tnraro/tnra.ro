#!/usr/bin/env sh

set -e

npm run build

cd dist

echo 'tnra.ro' > CNAME

git init
git checkout -b main
git add -A
git commit -m "deploy"

git push -f git@github.com:tnraro/tnra.ro.git main:gh-pages

cd -