import mongoose from 'mongoose';

export const dbConnection = (url: string) => {
  try {
    mongoose.connect(url);
    mongoose.connection.on('error', () => {
      throw new Error('Error on db connection');
    });
    mongoose.connection.once('connected', () => console.log('Db connected'));
  } catch (error) {
    throw new Error('Error on db connection');
  }
}
