const express = require('express');
const app = express();
app.get('/greet', greet);

function greet(req,res){
    const name = req.query.name;
    if(name) res.send(`hello,${name}`);


    res.send(`Hello, Guest!`);
}

app.listen(5000, ()=>{
    console.log('start and running fine')
})