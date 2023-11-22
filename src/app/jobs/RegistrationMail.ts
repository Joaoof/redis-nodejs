import Mail from "../../lib/Mail"

interface User {
    user: {
        name: string
        email: string
    }
}

interface Data {
    data: Object
}

export default {
    key: 'RegistrationMail',
    options: {
        delay: 50000,
        priority: 10,
        repeat: {
            every: 1,
            limit: 100
        },
        lifo: true
    },
    async handle({ data }: Data) {
        const { user } = data as User       

        try {
        await Mail.sendMail({
              from: 'Joao <joaodeus400@gmail.com>',
              to: `${user.name} <${user.email}>`,
              subject: 'Cadastro de user',
              html: `Olá ${user.name}, bem vindo a DIO`
            })

          } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
          }      
          
    }
}
