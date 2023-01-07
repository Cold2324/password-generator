import express from 'express'
import { generatePassword } from '@cityssm/simple-password-generator'
import cors from 'cors'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({
    password: generatePassword(),
    message: 'Password Generated',
  })
})

app.listen(port, () => {
  console.log('server running')
})
