# SSR React App with Redux

An SSR Front-end application developed in React.js and an Express.js server with Redux.js global state manager with customized Webpack configurations for Server and Client directories.

## Overall Architecture

- Customized Webpack configurations to build server and client bundles separately.
- Routing between pages with `react-router-dom` in custom configurations with the `react-router-config` package.
- Handling global state with `Redux.js` and `Thunk` middleware, Persisting state between the server and the client by adding the global state to the rendered HTML page.
- Running a customized `getServerSideProps` method for each page in the React app on the server using the `Promise.allSettled()` API.
- Custom renderer method uppon `renderToString()` from `react-dom/server`.
- Hydrating the server-rendered HTML on the client side with `ReactDOM.hydrate()` API.
- Adding metadata to the rendered HTML page with the `react-helmet` package.

## Usage

### Install Dependencies

```
npm install
```

### Env Variables

Create a .env file in the root and add the following:

```
SERVER_PORT=3000
```

### Run development mode

```
npm run dev
```

Or, instead, you can run the server and client separately with different scripts:

#### Run server

```
dev:build-server
dev:server
```

#### Run client

```
dev:build-client
```

## License

The MIT License
Copyright (c) 2022 Pooyadhgh
