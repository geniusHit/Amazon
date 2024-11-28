const mongoose=require("mongoose")
const signupSchema=mongoose.Schema({
    name:{
        type:String
    },
    mobile:{
        type:Number
    },
    password:{
        type:String
    }
})
const signupModel=mongoose.model("signup", signupSchema)
module.exports=signupModel