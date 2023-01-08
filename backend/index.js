import express from 'express'
import { generatePassword } from '@cityssm/simple-password-generator'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({
    password: generatePassword(),
  })
})

app.listen(PORT, () => {
  console.log('server running')
})
