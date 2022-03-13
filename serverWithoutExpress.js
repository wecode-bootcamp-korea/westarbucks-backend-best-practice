const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request received')

  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ message: "Welcome to >wecode server! Http server without express" }))
});

server.listen(8000, () => {
  console.log('server is running on PORT 8000')
}) 
