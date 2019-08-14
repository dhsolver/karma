# frontend

The bet karma web-app written in React.

## Documentation

### ICONS

[icon sets](icons.MD)

## Setup Instructions

### Pre-requisties

- Node.js 10.x (LTS/Dubnium)
- Yarn 1.16.x (Global)

### Environment

Copy `.env.example`. Change any detials if you need to, but it should contain everything you need to get started.

```sh
$ cp .env.example .env
```

### Dependencies

Install dependencies:

```sh
$ yarn install
```

### Run!

Finally, you can run HMR enabled app using webpack-dev-server and start coding!

```sh
$ yarn start
```

## Development

### Linting code

Prettier and eslint is configured. Set up live linting and auto prettier on your code editor, and you are good to go!

To check lint:

```sh
$ yarn run lint
```

To fix linting issues:

```sh
$ yarn run lint:fix
```

### Analyze Bundle Size

```sh
$ yarn run analyzer
```

## Release Instructions

### Build command

```sh
yarn build
```

### Make Release

TBD use release-it

### Deploy

TBD
