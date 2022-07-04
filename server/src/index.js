import dotenv from 'dotenv';
import express from 'express';
import renderer from './helpers/renderer';

// .env config
dotenv.config({ path: '../.env' });

const app = express();
const port = process.env.SERVER_PORT || 3000;

// ststic diretory
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(renderer());
});

app.listen(port, () => console.log(`⚡️ Server is running on port: ${port}`));
