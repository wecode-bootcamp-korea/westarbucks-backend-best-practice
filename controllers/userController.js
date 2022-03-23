const userService = require('../services/userService') 

// 아래 정의된 함수는 지난 수업시간에 다룬 내용 입니다.
const signUp = async (req, res) => {

  try {
    const { email, password } = req.body

		if (!email || !password) {
			const error = new Error('KEY_ERROR')
			error.statusCode = 400
			throw error
		}

		await userService.signUp(email, password)

    res.status(201).json({ message: 'SIGNUP_SUCESS' })
  } catch (err) {
    console.log(err)
    return res.status(err.statusCode || 500).json({ message: err.message })
  }
}

const signIn = async(req, res) => {
  try {
    const { email, password } = req.body

		if (!email || !password) {
			const error = new Error('KEY_ERROR')
			error.statusCode = 400
			throw error
		}

    const token = await userService.signIn(email, password)

    return res.status(200).json({ message: 'LOGIN_SUCCESS', jwt: token})
  } catch (err) {
    console.log(err)
    return res.status(err.statusCode || 500).json({ message: err.message })
  }
} 

module.exports = {
	signUp,
  signIn
}