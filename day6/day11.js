const express = require("express")
const app=express();


function authenticationMiddleware(req, res) {
   try{
    const token = req.headers.authorization.split(" ")[1];
    if (decodedToken) next();
   } 
   catch(err){
    res.status(401).send("Access denied");
   }
}

app.get("/", (req,res)=>{
    res.status(200).send("Kya Haal chaal ");
});


app.get("/authroute", authenticationMiddleware, (req,res)=>{
    res.status(200).send("Authorised");
});

app.listen(3000, ()=> console.log("server running"));


