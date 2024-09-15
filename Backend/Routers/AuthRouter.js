const {signUpValidation , LoginValidation}=require('../Middlewares/AuthValidation')

const {SignUp,Login}=require('../Controller/Authcontroller')

const router=require('express').Router()

router.post('/signup',signUpValidation,SignUp)
router.post('/login',LoginValidation,Login)

module.exports=router
