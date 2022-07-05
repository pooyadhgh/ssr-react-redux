import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../client/App';

const renderer = (req) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <App />
    </StaticRouter>
  );

  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
    `;
  return html;
};

export default renderer;
