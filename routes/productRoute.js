const express = require('express')
const router = express.Router()

const productController = require('../controllers/productController') 
// Route 는 오직 Controller 에만 의존 합니다.

router.get('/categories', productController.getCategories) 
router.get('', productController.getProducts) // -> /products
router.get('/:id', productController.getProduct)

module.exports = router // 이렇게 내보내면 부모 router 에 자동으로 연결됩니다.