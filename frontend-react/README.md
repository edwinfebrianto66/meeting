# Frontend React

## Development Mode

```bash
docker build -f Dockerfile.dev -t react-dev .
docker run -it -p 3000:3000 -v ${PWD}:/app react-dev
```

## Production Mode

```bash
docker build -t react-prod .
docker run -d -p 3000:80 react-prod
```
