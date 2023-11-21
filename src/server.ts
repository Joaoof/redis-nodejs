import 'dotenv/config'
import express, { Express } from 'express'
import BullBoard from 'bull-board'
import UserController from './app/controllers/UserController'
import { ExpressAdapter } from '@bull-board/express'
import Queuee from './lib/Queue'

const app: Express = express()

app.use(express.json())
const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');


BullBoard.createBullBoard(Queuee.queues.map((queue: { bull: any }) => queue.bull))
app.post('/users', UserController.store)

app.use('/admin/queue', serverAdapter.getRouter())

const port: string | undefined = process.env.PORT

app.listen(`${port}`, () => {
    console.log(`Server running on the ${port}`);
})

