import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;

export interface IBook extends Document {
  title: string;
  overview: string;
  category?: string;
  price: number;
  created_date: Date;
}

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  created_date: {
    type: Date,
    default: Date.now()
  }
});

export const bookModel = mongoose.model<IBook>('book', BookSchema);
