const express = require("express")
const app=express();

function Middleware(req,res,next){
    const timestamp= new Date().toDateString()
    const method =req.method

    console.log(`${timestamp}-${method} request received`)
    next()
}

app.use(Middleware)
app.listen(5000,()=>{
    console.log("ok running" )
})