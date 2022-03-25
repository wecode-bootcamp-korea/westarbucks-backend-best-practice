const userService = require('../services/userService')

// 아래 정의된 함수는 express 미들웨어 세션 때 다룬 내용 입니다.
const validateForm = async (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    // 유효성 검증 통과 못 했을 시
    res.status(400).json({ message: 'KEY_ERROR' })
    return
  }

  next()
}

// 아래 정의된 함수는 지난 수업시간에 다룬 내용 입니다.
const signUp = async (req, res) => {
  try {
    const { email, password } = req.body

    await userService.signUp(email, password)

    res.status(201).json({ message: 'SIGNUP_SUCCESS' })
  } catch (err) {
    console.log(err)
    return res.status(err.statusCode || 500).json({ message: err.message })
  }
}

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body

    const token = await userService.signIn(email, password)

    return res.status(200).json({ message: 'LOGIN_SUCCESS', jwt: token })
  } catch (err) {
    console.log(err)
    return res.status(err.statusCode || 500).json({ message: err.message })
  }
}

module.exports = {
  validateForm,
  signUp,
  signIn,
}
