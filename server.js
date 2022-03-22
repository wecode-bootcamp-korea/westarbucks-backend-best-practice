const http = require('http')
const express = require('express')
const { PrismaClient } = require('@prisma/client')
const routes = require('./routes')

const prisma = new PrismaClient()

const app = express()

app.use(express.json())
app.use(routes) // Route 에 의존성을 가집니다.

app.get('/', (req, res) => {
  res.json({ message: '/ endpoint' })
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