import Queue, { Job } from "bull";
import redisConfig from '../../src/config/redis'

import * as jobs from '../app/jobs'

const queues = Object.values(jobs).map(job => ({
    bull: new Queue(job.key, redisConfig),
    name: job.key,
    handle: job.handle,
    options: job.options
})) 


export  default {
    queues,
    add(name: string, data: any) {
        const queue = this.queues.find(queue => queue.name === name)

        return queue?.bull.add(data, queue.options )
    },
    process() {
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle)

            queue.bull.on('failed', (job: Job, err: Error) => {
                console.log('Job failed', queues.keys, job.data);
                console.log(err);
            })
        })
    }
}
  