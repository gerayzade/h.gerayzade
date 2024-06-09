# H.Gerayzade Nuxt 3 WebApp

## Set Up Environment

Copy the file `.env.sample` to `.env`

```bash
cp .env.sample .env
```

Edit the `.env` file to add all the secrets that were not included into sample.

You can also include values from `.env.development` or `.env.production` in order to run app in the corresponding environment.

You may also need to create SSL certificate on your local machine in order to use `https` protocol during the development stage.

```bash
brew install mkcert
mkcert -install
mkcert localhost
```

Don't forget to update `DEV_CERT_PATH` and `DEV_CERT_KEY_PATH` environment variables after they are created if needed.

## Development

### CLI

```bash
npm install
npm run dev
```

### Docker

To build and run our development Docker image, we can use the `docker-compose command` with the `-f` option to specify the override file:

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```

In this command, `-f docker-compose.yml -f docker-compose.dev.yml` tells docker compose to use both the production and development compose files, with the settings in the development file overriding those in the production file. `up --build` builds the images and starts the containers.

## Production Build

### CLI

```bash
npm install
npm run build
```

### Docker

To build and run our production Docker image, we can use the `docker-compose up` command:

```bash
docker compose -f docker-compose.yml up --build
```

## Static Site Generation

### CLI

```bash
npm install
npm run generate
npx serve .output/public
```

### Docker

To generate static pages and run our production Docker image, we can use the `docker-compose command` with the `-f` option to specify the override file:

```bash
docker compose -f docker-compose.static.yml up --build
```
