import { Request, Response } from 'express';
import { bookModel as Book, IBook } from '../models/bookModel';

export const addNewBook = async (req: Request, res: Response) => {
  try {
    const newBook: IBook = new Book({
      title: req.body.title,
      overview: req.body.overview,
      price: req.body.price
    });
    const book: IBook = await newBook.save();
    res.status(200).json({ book });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books: IBook[] = await Book.find({});
    res.status(200).json({ books });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export const getBookById = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const book: IBook | null = await Book.findById({ _id: bookId });
    res.status(200).json({ book });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export const updateBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const newBookInfo: IBook = new Book({
      title: req.body.title,
      overview: req.body.overview,
      price: req.body.price
    });
    const book: IBook | null = await Book.findOneAndUpdate({ _id: bookId }, { $set: { newBookInfo }}, { new: true });
    res.status(200).json({ book });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    await Book.deleteOne({ _id: bookId });
    res.status(200).json({ message: 'book successfully deleted' })
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
