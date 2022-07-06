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

  try {
    await Promise.all(promises);

    const context = {};
    const content = renderer(req, store, context);

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => console.log(`⚡️ Server is running on port: ${port}`));
