import dotenv from 'dotenv'
dotenv.config()

export const BASE_URL = process.env.BASE_URL
export const TASK_NAME = `New Task ${Date.now()}`

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER:{
        USERNAME: process.env.INVALID_USER,
        PASSWORD: process.env.INVALID_PASSWORD
    }
}

export const ERROR_MESSAGE = {
    INVALID_PASSWORD_ERROR_MSG: 'Wrong email or password.',
    BLANK_FIELDS_ERROR_MSG: 'Invalid email address.',
    BLANK_PASSWORD_ERROR_MSG: 'Blank password.'
}