const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
require("./dbconnection/connection")
require("dotenv").config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const router=require("./router/route")
const port=process.env.port
app.use(router)

app.listen(port, ()=>{
    console.log(`Server is running or port : ${port}`)
})