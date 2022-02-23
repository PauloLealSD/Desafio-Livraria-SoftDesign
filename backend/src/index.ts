import "reflect-metadata"
import { createConnection } from "typeorm"
import * as express from "express"
import * as cors from "cors"
import { router } from "./routes"

createConnection().then(async () => {
  const PORT = 4000

  const app = express()

  app.use(cors())

  app.listen(PORT, () => { console.log(`Listening to port ${PORT}`) })

  app.use(router)

}).catch(error => console.log(error))
