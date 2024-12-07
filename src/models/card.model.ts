import { model, Schema } from 'mongoose';

import { CardStats } from '../types/cardStats.type';

type Card = {
  name: string;
  description: string;
  lvlCostAndProfit: CardStats;
  image: string;
  bgHexColor: string;
};

const cardShema = new Schema<Card>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  bgHexColor: {
    type: String,
    required: true,
  },
  lvlCostAndProfit: {
    type: Object,
    required: true,
  },
});

const Card = model('Card', cardShema);

export default Card;
