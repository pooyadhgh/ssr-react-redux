const dotenv = require('dotenv');
const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;

const Home = require('./client/components/Home').default;

// .env config
dotenv.config({ path: '../.env' });

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(port, () => console.log(`⚡️ Server is running on port: ${port}`));
