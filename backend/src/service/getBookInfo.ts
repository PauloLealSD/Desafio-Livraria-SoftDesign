import { getRepository } from "typeorm"
import { Book } from "../entity/Book"

export async function getBooksInfo(id: number) {   
  const bookRepository = getRepository(Book)
  const book = await bookRepository.findOne({id: id}, {relations: ["reviews"]})
  return book
}