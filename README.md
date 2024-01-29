# open-irs

## About

[![open-irs-server](https://github.com/Degamisu/open-irs/actions/workflows/main.yml/badge.svg?branch=main&event=workflow_dispatch)](https://github.com/Degamisu/open-irs/actions/workflows/main.yml)

>Context: OpenIRS is a gitbot that responds to new issues

OpenIRS is a very formal gitbot. This can be installed as a:

- Github App  <--   `recommended`
- Local execution
- Docker Container

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t open-irs .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> open-irs
```

## Contributing

If you have suggestions for how open-irs could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2024 Degamisu

**PULL REQUESTS WILL BE REQUIRED TO HAVE THIS UNCHANGED**
