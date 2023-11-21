import 'dotenv/config'
import express, { Express } from 'express'

import UserController from './app/controllers/UserController'

const app: Express = express()

app.use(express.json())

app.post('/users', UserController.store)

const port: string | undefined = process.env.PORT

app.listen(`${port}`, () => {
    console.log(`Server running on the ${port}`);
})

