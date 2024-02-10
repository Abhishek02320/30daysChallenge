const express = require("express")
const app=express();

app.get('/positive',(req,res,next)=>{
    const number = parseInt(req.query.number);

    if(Number.isInteger(number)&& number > 0){
        res.send('Success: The number is a positive integer.');
    }
    else{
        next(new Error('Error: Please provide positive integer.'));
    }
});

app.use((err,req,res,next)=>{
    res.status(400).send(err.message);
});


app.listen(5000,()=>{
    console.log("ok running" )
});