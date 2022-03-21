const http = require('http')
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const { sendCategories } = require('./sendCategories')
const { sendProductList } = require('./sendProductList')
const { sendProductDetail } = require('./sendProductDetail')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: '/ endpoint' })
})

app.get('/categories', sendCategories)
app.get('/products', sendProductList)
app.get('/product/2', sendProductDetail)

app.post('/user/signup', async (req, res) => {
  try {
    const { email, password } = req.body

		if (!email || !password) {
			const error = new Error('KEY_ERROR')
			error.statusCode = 400
			throw error
  
		}

		if (password.length < 8) {
			const error = new Error('PASSWORD_TOO_SHORT')
			error.statusCode = 400
			throw error
		}

		const user = await prisma.$queryRaw`
		  SELECT id FROM users WHERE email = ${email}
    `

		if (user.length !== 0) {
			const error = new Error('EXISTING_USER')
			error.statusCode = 409
			throw error
		}

    const encryptedPW = bcrypt.hashSync(password, bcrypt.genSaltSync())

    await prisma.$queryRaw`
      INSERT INTO users(email, password) VALUES (${email}, ${encryptedPW});
    `
    return res.status(201).json({ message: "SIGNUP_SUCCESS" })
  } catch (err) {
    console.log(err)
    return res.status(err.statusCode || 500).json({ message: err.message })
  }
})

app.post('/user/remove', async(req, res) => {
  try {
    const { email } = req.body
    console.log('email: ', email)
    const deletedUser = await prisma.$queryRaw`
      DELETE FROM users WHERE email=${email};
    `
    return res.status(200).json({ message: "DELETED" })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: err.message })
  }
}) 

app.post('/user/login', async(req, res) => {
  try {
    const { email, pw } = req.body

		if (!email || !pw) {
			const error = new Error('KEY_ERROR')
			error.statusCode = 400
			throw error
		}

		const user = await prisma.$queryRaw`
		  SELECT id, password FROM users WHERE email = ${email}
    `
		if (user.length === 0) {
			const error = new Error('INVALID_USER')
			error.statusCode = 400
			throw error
		}

    const isCorrect = bcrypt.compareSync(pw, user[0].password)

    if (!isCorrect) {
			const error = new Error('INVALID_USER')
			error.statusCode = 400
			throw error
    }

    const token = jwt.sign({ userId: user[0].id }, process.env.SECRET_KEY)

    return res.status(200).json({ message: 'LOGIN_SUCCESS', jwt: token})

  } catch (err) {
    console.log(err)
    return res.status(err.statusCode || 500).json({ message: err.message })
  }
}) 

const server = http.createServer(app)

const start = async () => { // 서버를 시작하는 함수입니다.
  try {
    server.listen(8000, () => console.log(`Server is listening on 8000`))
  } catch (err) { 
    console.error(err)
//    await prisma.$disconnect() // 에러가 발생했을 시에 database 연결을 종료합니다.
  }
}

start()