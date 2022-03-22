const productDao = require('../models/productDao')

const getCategories = async () => {
	return await productDao.getCategories()
}

const getProducts = async () => {
	return await productDao.getProducts()
}

module.exports = { getCategories, getProducts }