const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const sendProductDetail = async (req, res) => {
  const product = await prisma.$queryRaw`
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
  `
}

module.exports = { sendProductDetail } // routing.js 에서 사용하기 위해 모듈로 내보낸다.
