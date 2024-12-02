import { model, Schema } from 'mongoose';

const cardShema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Test = model('Card', cardShema);

export default Test;
