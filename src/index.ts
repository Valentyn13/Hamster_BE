import fs from 'fs';
import path from 'path';

import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';

import { cardsData } from './constants/cardParams';
import connectDb from './db/connection';
import Card from './models/card.model';
import AppRouter from './routes';
import { getRandomBrightColor } from './utils/helpers/rundomHexColor';
import { generateCardStats } from './utils/math';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

app.use(cors());

connectDb();

const router = new AppRouter(app);

router.init();
const ASSET_FOLDER = path.join(__dirname, 'assets');

app.get('/', async (req: Request, res: Response) => {
  const files = fs.readdirSync(ASSET_FOLDER);
  const imagesPath = files.map((file) => path.join(ASSET_FOLDER, file));

  try {
    const promises = cardsData.map(async (card, index) => {
      fs.readFile(imagesPath[index], async (err, data) => {
        if (err) {
          console.error('Ошибка при чтении файла:', err);
          return;
        }
        const base64String = data.toString('base64');
        await Card.create({
          name: card.title,
          description: card.description,
          lvlCostAndProfit: generateCardStats(card),
          image: base64String,
          bgHexColor: getRandomBrightColor(),
        });
      });
    });

    await Promise.all(promises);
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    console.error('Ошибка при создании карточек:', error);
  }
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
