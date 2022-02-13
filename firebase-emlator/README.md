# Introduction

firebase Tools local emulator

## setup

初期設定として GCP に login
`$ docker-compose run --rm firebase firebase login --no-localhost`

作業ディレクトリ (firebase init してあるディレクトリ) で以下を実行
`$ firebase init emulators`

`$ firebase emulators:start`

## memo

[参考 URL](https://sunday-morning.app/posts/2021-04-17-firebase-emulator-suite-docker-on-raspberrypi)
[参考 URL](https://sunday-morning.app/posts/2021-05-20-firebase-local-emulator-cloud-storage)
