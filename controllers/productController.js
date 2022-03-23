const productService = require('../services/productService') 
const jwt = require('jsonwebtoken')

// 아래 정의된 함수는 지난 수업시간에 다룬 내용 입니다.
const getCategories = async (req, res) => {
  try {
		if (req.headers.token === undefined) {
			const error = new Error('LOGIN_REQUIRED')
			error.statusCode = 401
			throw error
		}

		const token = req.headers.token

		const { userId } = jwt.verify(token, process.env.SECRET_KEY) 

		const categories = await productService.getCategories()

    res.status(200).json({ message: `환영합니다 ${userId}번 고객님`, categories })
  } catch (err) {
    console.log(err)
    return res.status(err.statusCode || 500).json({ message: err.message })
  }
}

const getProducts = async (req, res) => {
	try {
		const products = await productService.getProducts()

    res.status(200).json({ products })
	} catch (err) {
    console.log(err)
    return res.status(err.statusCode || 500).json({ message: err.message })
  }
}

const getProduct = async (req, res) => {
	try {
		const { id } = req.____

		const product = await productService.getProduct(id)

		res.status(200).json({ product })
	} catch (err) {
    console.log(err)
    return res.status(err.statusCode || 500).json({ message: err.message })
  }
}

module.exports = {
	getCategories,
	getProducts,
	getProduct
}