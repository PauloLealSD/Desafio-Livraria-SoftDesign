import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { getBooksInfo } from "../service/getBookInfo"

export async function getBookInfoHandler(req: Request, res: Response) {
  try {
    const bookId = parseInt(req.params.id)
    const book = await getBooksInfo(bookId)
    res.status(StatusCodes.OK).json(book)
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json(
      {
        message: (err as Error).message
      }
    )
  }
}