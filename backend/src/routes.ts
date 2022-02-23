import { Router } from "express"
import { getBookInfoHandler } from "./controller/getBookInfoHandler"
import { getBookListHandler } from "./controller/getBookListHandler"

const router = Router()

router.get("/", getBookListHandler)

router.get("/book/:id", getBookInfoHandler)

export { router }