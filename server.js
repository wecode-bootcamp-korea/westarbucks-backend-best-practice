const http = require('http')
const express = require('express')
const { PrismaClient } = require('@prisma/client')
const routes = require('./routes')

export const prisma = new PrismaClient()

const app = express()

app.use(express.json())
app.use(routes) // Route 에 의존성을 가집니다.

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' })
})

const server = http.createServer(app)
const PORT = process.env.PORT

const start = async () => {
  // 서버를 시작하는 함수입니다.
  try {
    server.listen(PORT, () => console.log(`Server is listening on ${PORT}`))
  } catch (err) {
    console.error(err)
    await prisma.$disconnect() // 에러가 발생했을 시에 database 연결을 종료합니다.
  }
}

start()
