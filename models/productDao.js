const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getCategories = async () => {
	return await prisma.$queryRaw`
		SELECT id, name FROM categories; 
	`
}

const getProducts = async (categoryId) => {
  return await prisma.$queryRaw`
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
		WHERE categories.id = ${categoryId}
  `
}

const getProduct = async(id) => {
  return await prisma.$queryRaw`
		SELECT
			p.id AS id,
			p.korean_name AS koreanName,
			p.english_name AS englishName,
			JSON_ARRAYAGG(a.name)
		FROM products p
		JOIN product_images pi ON pi.product_id = p.id
		LEFT join product_allergies pa ON pa.product_id = p.id
		LEFT join allergies a ON pa.allergy_id = a.id
		GROUP BY p.id
		WHERE p.id = ${id} 
  `
}

module.exports = {
	getCategories,
	getProducts,
	getProduct
}