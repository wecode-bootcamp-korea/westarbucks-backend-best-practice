const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userDao = require('../models/userDao')

const signUp = async (email, password) => {
  if (password.length < 8) {
    const error = new Error('PASSWORD_TOO_SHORT')
    error.statusCode = 400
    throw error
  }

  const user = await userDao.getUserByEmail(email)

  if (user.length !== 0) {
    const error = new Error('EXISTING_USER')
    error.statusCode = 409
    throw error
  }

  const encryptedPW = bcrypt.hashSync(password, bcrypt.genSaltSync())

  const newUser = await userDao.createUser(email, encryptedPW)

  return newUser
}

const signIn = async (email, password) => {
  const user = await userDao.getUserWithPasswordByEmail(email)

  if (user.length === 0) {
    const error = new Error('INVALID_USER')
    error.statusCode = 400
    throw error
  }

  const isCorrect = bcrypt.compareSync(password, user[0].password)

  if (!isCorrect) {
    const error = new Error('INVALID_USER')
    error.statusCode = 400
    throw error
  }

  return jwt.sign({ userId: user[0].id }, process.env.SECRET_KEY)
}
module.exports = { signUp, signIn }
