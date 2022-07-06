import dotenv from 'dotenv';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import routes from './client/routes';
import renderer from './helpers/renderer';
import createServerStore from './helpers/createServerStore';

// .env config
dotenv.config({ path: '../.env' });

const app = express();
const port = process.env.SERVER_PORT || 3000;

// ststic diretory
app.use(express.static('public'));

// server-side rendering setup
app.get('*', async (req, res) => {
  const store = createServerStore();

  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    return route.getServerSideProps ? route.getServerSideProps(store) : null;
  });

  await Promise.allSettled(promises);

  const context = {};
  const content = renderer(req, store, context);

  if (context.url) {
    res.redirect(301, context.url);
  }

  if (context.notFound) {
    res.status(404);
  }

  res.send(content);
});

app.listen(port, () => console.log(`⚡️ Server is running on port: ${port}`));
