const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const sendProductList = async (req, res) => {
  const products = await prisma.$queryRaw`
    SELECT
      products.id AS id,
      products.korean_name AS koreanName,
      products.english_name AS englishName,
      categories.name AS category,
      categories.id AS categoryId,
      product_images.image_url AS imageUrl
    FROM products
    JOIN categories ON products.category_id = categories.id 
    JOIN product_images ON product_images.product_id = products.id
  `
  return res.status(200).json({ products })
}

module.exports = { sendProductList } // routing.js 에서 사용하기 위해 모듈로 내보낸다.
