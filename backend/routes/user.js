const express = require("express");
const router = express.Router();
const {userLogin,userSignUp,getUser}= require("../controller/user")



router.post("/SignUp",userSignUp)
router.post("/Login",userLogin)
router.get("/user/:id",getUser)

module.exports=router

