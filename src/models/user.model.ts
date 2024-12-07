import { model, Schema } from 'mongoose';

const userShema = new Schema({
  email: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  deviceId: {
    type: String,
    required: true,
  },
  hourIncomeRate: {
    type: Number,
    required: true,
    default: 0,
  },
  tapCost: {
    type: Number,
    required: true,
    default: 5,
  },
  tapLvl: {
    type: Number,
    required: true,
    default: 1,
  },
  tapBalance: {
    data: {
      type: Number,
      required: true,
      default: 0,
    },
    timestamp: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  passiveIncomeBalance: {
    data: {
      type: Number,
      required: true,
      default: 0,
    },
    timestamp: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
});

const User = model('User', userShema);

export default User;
