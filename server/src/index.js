import dotenv from 'dotenv';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Home from './client/components/Home';

// .env config
dotenv.config({ path: '../.env' });

const app = express();
const port = process.env.SERVER_PORT || 3000;

// ststic diretory
app.use(express.static('public'));

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  const html = `
  <html>
    <head></head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
  res.send(html);
});

app.listen(port, () => console.log(`⚡️ Server is running on port: ${port}`));
