import Mail from "../../lib/Mail"

interface User {
    name: string
    email: string
}

export default {
    ket: 'RegistrationMail',
    options: {
        delay: 5000,
        priority: 3
    },
    async handle({ data }: { [key: string]: string | object }): Promise<void> {
        const { name, email } = data as User

        await Mail.sendMail({
            from: 'Joao <joaodeus400@gmail.com>',
            to: `${name} ${email}>`,
            subject: 'Cadastro de user',
            html: `Olá ${name}, bem vindo a DIO`
        })
    }
}
