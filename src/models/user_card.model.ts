import { model, Schema, Types } from 'mongoose';

const userCardShema = new Schema({
  userId: {
    type: Types.ObjectId,
    required: true,
  },
  cardId: {
    type: Types.ObjectId,
    required: true,
  },
  cardLvl: {
    type: Number,
    required: true,
    default: 1,
  },
});

const Test = model('user_card', userCardShema);

export default Test;
