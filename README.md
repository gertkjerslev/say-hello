# SayHello

Just another nodejs server that returns a message specified in the environment variable `RESPONSE_MESSAGE`.

## Usage

```bash
docker run -p 4000:4000 -e RESPONSE_MESSAGE='hello' say-hello
```

## Environment Variables

RESPONSE_MESSAGE

## Endpoints

/hello

## License
MIT
