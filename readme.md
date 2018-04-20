# Kube-Client
> NodeJS/Micro-based Client API to interact with Kubernetes API

[![Build Status](https://travis-ci.org/nottinhill/kube-client-micro.svg?branch=master)](https://travis-ci.org/nottinhill/kube-client-micro) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/nottinhill/kube-client-micro/issues) [![HitCount](http://hits.dwyl.io/nottinhil/kube-client-micro.svg)](http://hits.dwyl.io/nottinhil/kube-client-micro)

## Usage

```bash
$ npm install
$ npm dev
```


## Deployment

This microservice can be pulled in from [Dockerhub](https://hub.docker.com/r/meshfields/kube-client-micro) with

`docker pull meshfields/kube-client-micro`


*Prod mode* to be launched with `npm start`.

## API

```bash
GET /pods
GET /namespaces
```

## License

MIT © 2018 by Meshfields (Stephan Kristyn)
