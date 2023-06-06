import express, { Application, Request, Response } from 'express'

import cors from 'cors'

import usersRouter from './app/modules/users/users.route'
import usersService from './app/modules/users/users.service'
const app: Application = express()
app.use(cors())
// console.log(app.get('env'))
//perser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application route
app.use('/api/v1/users/', usersRouter)

app.get('/', async (req: Request, res: Response) => {
  await usersService.createUser({
    id: '999',
    role: 'student',
    password: '1234',
  })
  res.send('Working successfully!')
})

export default app
