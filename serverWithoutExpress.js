const http = require('http')
const { sendProducts } = require('./sendProducts')

console.log(sendProducts)

const server = http.createServer((req, res) => {
  console.log('request received')

  const { url, method } = req

  res.setHeader('Content-Type', 'application/json')

  if (url === '/ping') {
    return res.end(JSON.stringify({ message: '/pong' }))
  }

  if (url === '/signup' && method === 'POST') {
    return res.end(
      JSON.stringify({ message: '회원가입 완료!' })
    )
  }

  if (url === '/login' && method === 'POST') {
    return res.end(
      JSON.stringify({ message: '로그인 완료!' })
    )
  }

  if (url === '/products' && method === 'GET') { return sendProducts(res) }

  res.end(JSON.stringify({ message: "Welcome to >wecode server! Http server without express" }))
});

server.listen(8000, () => {
  console.log('server is running on PORT 8000')
}) 
