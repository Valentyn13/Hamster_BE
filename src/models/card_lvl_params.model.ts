import { model, Schema } from 'mongoose';

type CardCostPerLvl = Record<number, number>;
type CardIncomePerLvl = Record<number, number>;
type CardLvlParams = {
  cardId: string;
  cardCostPerLvl: CardCostPerLvl;
  cardIncomePerLvl: CardIncomePerLvl;
};
const cardLvlParamsShema = new Schema<CardLvlParams>({
  cardId: {
    type: String,
    required: true,
  },
  cardCostPerLvl: {
    type: Object,
    required: true,
  },
  cardIncomePerLvl: {
    type: Object,
    required: true,
  },
});

const Test = model('user_card', cardLvlParamsShema);

export default Test;
