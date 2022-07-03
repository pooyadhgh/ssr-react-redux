const dotenv = require('dotenv');
const express = require('express');

// .env config
dotenv.config({ path: '../.env' });

const app = express();
const port = process.env.SERVER_PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => console.log(`⚡️ Server is running on port: ${port}`));
