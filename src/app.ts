import * as dotenv from 'dotenv';
import express from 'express';
import { sequelize } from './database/models/index';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();
const app: express.Application = express();

const PORT: number = Number(process.env.PORT) || 8080;

// Set CORS option
app.use(cors());

// Parse requests of content-type: application/json
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// RESTful API route for DB
app.use('/', require('./api/router/router.ts'));

// Default route for server status
app.get('/', (req, res) => {
  res.json({ message: `Server is running on port ${PORT}` });
});
// Set listen port for request
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  // DB Connection
  await sequelize
    .authenticate()
    .then(async () => {
      console.log('connection success');
    })
    .catch((e) => {
      console.error('connection failed : ', e);
    });
});
