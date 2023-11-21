import 'dotenv/config'
import express, { Express } from 'express'

const app: Express = express()

app.use(express.json())

const port: string | undefined = process.env.PORT

app.listen(`${port}`, () => {
    console.log(`Server running on the ${port}`);
})

