import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import serializeJavascript from 'serialize-javascript';
import routes from '../client/routes';

const renderer = (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  const html = `
  <!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serializeJavascript(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
    `;
  return html;
};

export default renderer;
