const productDao = require('../models/productDao')

const getCategories = async () => {
	return await productDao.getCategories()
}

const getProducts = async () => {
	return await productDao.getProducts()
}

const getProduct = async(id) => {
	const product = await productDao.getProduct(id)
	
	if (product.length === 0) {
		const error = new Error('PRODUCT_NOT_FOUND')
		error.statusCode = 404
		throw error
	}

	return product
}

module.exports = { getCategories, getProducts, getProduct }