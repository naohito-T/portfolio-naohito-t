# Ubuntuのalpineイメージ
FROM alpine:3.14

# Emulator Suite をインストールする前に、以下が必要
# Node.js バージョン 8.0 以降。
# apk add (node) node v12.22.6
# Java バージョン 1.8 以降。
# java -version
# openjdk version "11.0.5" 2019-10-15

ENV RUNTIME_PACKAGES="bash openjdk11 nodejs" \
  DEV_PACKAGES="curl"

RUN apk update && \
  apk upgrade && \
  apk add --no-cache ${RUNTIME_PACKAGES} && \
  apk add --virtual build-dependencies --no-cache ${DEV_PACKAGES} && \
  touch ~/.bashrc && \
  curl -o- -L https://yarnpkg.com/install.sh | bash && \
  ln -s "$HOME/.yarn/bin/yarn" /usr/local/bin/yarn

COPY package.json yarn.lock ./

RUN yarn install

COPY . ./



