import 'dotenv/config'
import express, { Express } from 'express'
import UserController from './app/controllers/UserController'
import { ExpressAdapter } from '@bull-board/express'
import Queue from './lib/Queue'
import { createBullBoard } from '@bull-board/api'
import { BullAdapter } from '@bull-board/api/bullAdapter';

const app: Express = express()

app.use(express.json())
const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queue');

createBullBoard({
    queues: Queue.queues.map((queue: { bull: any }) => new BullAdapter(queue.bull)),
    serverAdapter,
})
app.post('/users', UserController.store)

app.use('/admin/queue', serverAdapter.getRouter())

const port: string | undefined = process.env.PORT

app.listen(`${port}`, () => {
    console.log(`Server running on the ${port}`);
})

