const {signUpValidation , LoginValidation}=require('../Middlewares/AuthValidation')//...middlewares

const {SignUp,Login}=require('../Controller/Authcontroller')//...controller

const router=require('express').Router()

router.post('/signup',signUpValidation,SignUp)//...signup route
router.post('/login',LoginValidation,Login)//...login route

module.exports=router
