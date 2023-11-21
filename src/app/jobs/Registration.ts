import Mail from "../../lib/Mail"

interface User {
    user: {
        name: string
        email: string
    }
}

export default {
    ket: 'RegistrationMail',
    options: {

    },
    async handle({ data }: {[key: string]: string | object }): Promise<void> {
        const { user } = data as User

        await Mail.sendMail({
            from: 'Joao <joaodeus400@gmail.com>',
            to: `${user.name} ${user.email}>`,
            subject: 'Cadastro de user',
            html: `Olá ${name}, bem vindo a DIO`
        })
    }
}
