import { model, Schema } from 'mongoose';

const testShema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const Test = model('Test', testShema);

export default Test;
