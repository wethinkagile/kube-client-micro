# Kube-Client
> NodeJS/Micro-based Client API to interact with Kubernetes API

[![Build Status](https://travis-ci.org/meshfields/kube-client-micro.svg?branch=master)](https://travis-ci.org/meshfields/kube-client-micro) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/nottinhill/kube-client-micro/issues) [![HitCount](http://hits.dwyl.io/nottinhil/kube-client-micro.svg)](http://hits.dwyl.io/nottinhil/kube-client-micro) [![Greenkeeper badge](https://badges.greenkeeper.io/meshfields/kube-client-micro.svg)](https://greenkeeper.io/) 

## Tests

```
$ npm test
```

## Usage

```bash
$ npm install
$ export NODE_ENV="development"
$ export AUTH0_DOMAIN="<your domain>.eu.auth0.com"
$ npm start dev
```

## Deployment

This microservice can be pulled in from [Dockerhub](https://hub.docker.com/r/meshfields/kube-client-micro) with

`docker pull meshfields/kube-client-micro`

*Prod mode* to be launched with `NODE_ENV=production npm start`.

## Config Modes

Development Mode will use your local kube config.

Production Mode will use in-cluster config from your Kube API.


## API

Working:

```bash
GET /namespaces
GET /{NAMESPACE}/pods
GET /{NAMESPACE}/deployments
```

## Authentication

Make sure to send a bearer token along in the header to get authenticate against Auth0.

```
curl --request GET --url 'http://localhost:3001/default/pods' --header 'authorization: Bearer {BEARER}' --header 'content-type: application/json'
```

## License

MIT © 2018 by Meshfields