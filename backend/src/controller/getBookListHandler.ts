import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { getBookList } from "../service/getBookList"

export async function getBookListHandler(req: Request, res: Response) {
  try {
    const books = await getBookList()
    res.status(StatusCodes.OK).json(books)
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json(
      {
        message: (err as Error).message
      }
    ) 
  }
}