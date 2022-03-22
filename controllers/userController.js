const userService = require('../services/userService') 

// 아래 정의된 함수는 지난 수업시간에 다룬 내용 입니다.
const signUp = async (req, res, next) => {

  try {
    const { email, password } = req.body

		if (!email || !password) {
			const error = new Error('KEY_ERROR')
			error.statusCode = 400
			throw error
  
		}

		const user = await userService.signUp(email, password)

    res.status(201).json({
      message: 'SIGNUP_SUCESS',
      user_id: user.id,
    })
  } catch (err) {
    console.log(err)
    return res.status(err.statusCode || 500).json({ message: err.message })
  }
}

module.exports = {
	signUp
}