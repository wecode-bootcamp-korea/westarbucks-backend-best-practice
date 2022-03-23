const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getUserByEmail = async (email) => {
	return await prisma.$queryRaw`
		SELECT id FROM users WHERE email = ${email}
	`
}

const getUserWithPasswordByEmail = async (email) => {
	return await prisma.$queryRaw`
		SELECT id, password FROM users WHERE email = ${email}
	`
}

const createUser = async (email, encryptedPW) => {
	return await prisma.$queryRaw`
		INSERT INTO users(email, password) VALUES (${email}, ${encryptedPW});
	`
}

module.exports = { getUserByEmail, createUser }