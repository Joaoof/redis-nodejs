import Mail from "../../lib/Mail"

interface User {
    name: string
    email: string
}

interface Data {
    data: Object
}

export default {
    key: 'RegistrationMail',
    options: {
        delay: 5000,
        priority: 3,
    },
    async handle({ data }: Data) {
        const { name, email } = data as User

        await Mail.sendMail({
            from: 'Joao <joaodeus400@gmail.com>',
            to: `Joao <joaodeus400@gmail.com>`,
            subject: 'Cadastro de user',
            html: `Olá ${name}, bem vindo a DIO`
        })
    }
}
