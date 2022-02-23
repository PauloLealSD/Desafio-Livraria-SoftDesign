import { getRepository } from "typeorm"
import { Book } from "../entity/Book"

export async function getBookList() {
  const bookRepository = getRepository(Book)
  const books = await bookRepository.find()
  return books
}