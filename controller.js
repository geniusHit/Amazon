const signupModel=require("../models/signupSchema")
exports.signup=async (req, res)=>{
    let data=new signupModel(req.body)
    const result=await data.save()
    res.send(result)
}