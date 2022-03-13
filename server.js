const http = require('http')
const express = require('express')


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

const server = http.createServer(app)

server.listen(8000, () => {
  console.log('server is listening on PORT 8000')
})
