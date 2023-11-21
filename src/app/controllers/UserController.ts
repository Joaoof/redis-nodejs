import { Request, Response } from "express"
import generatePassword from "password-generator"
import Queue from "../../lib/Queue"

interface User {
    name: string
    email: string
}

export default {
    async store(req: Request, res: Response) {
        const { name, email }: User = req.body

        const user: { [key: string]: string | object} = {
            name,
            email,
            password: generatePassword(15, false )
        }

        await Queue.add('RegistrationMail', {
            user
        })

        return res.json(user)
    }

}