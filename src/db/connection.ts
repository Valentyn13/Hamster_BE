import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    let connection_uri: string;
    if (process.env.MONGO_URI) {
      connection_uri = process.env.MONGO_URI;
    } else {
      throw new Error('MONGO_URI not found in .env file');
    }
    await mongoose.connect(connection_uri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDb;
