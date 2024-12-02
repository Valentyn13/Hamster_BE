import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';

import connectDb from './db/connection';
import Test from './models/test.model';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

app.use(cors());

connectDb();

app.get('/', async (req: Request, res: Response) => {
  const test = await Test.create({ name: 'John Doe', age: 25 });
  res.status(200).json(test);
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
