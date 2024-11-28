const express=require("express")
const route=express.Router()
const controller=require("../userController/controller")
route.post("/signup", controller.signup)

module.exports=route