# Frontend Vue.js

## Development Mode

```bash
docker build -f Dockerfile.dev -t vue-dev .
docker run -it -p 3002:3000 -v ${PWD}:/app vue-dev
```

## Production Mode

```bash
docker build -t vue-prod .
docker run -d -p 3002:80 vue-prod
```
