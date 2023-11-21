import nodemailer from 'nodemailer'
import mailConfig from '../../src/config/mail'

export default nodemailer.createTransport(mailConfig)