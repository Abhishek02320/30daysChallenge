const express = require("express")
const path = require('path')
function staticFileServer(req, res) {
    const app=express();
    const publicDirPath = path.join(__dirname, 'public');
    app.use(express.static(publicDirPath));

    
    app.get("/",(req,res)=>{
        res.sendFile(publicDirPath, 'index.html');
    });

    const port = process.env.PORT || 3000;
    
    
    app.listen(port,()=>{
        console.log(`ok running server ${port}` )
    });
}
staticFileServer();
