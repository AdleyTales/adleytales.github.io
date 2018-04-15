const express = require('express');
const path = require('path');
const server = express();
server.listen(8080);

server.use((req,res,next)=>{

    next();
});

console.log(__dirname);
console.log(path.resolve(__dirname,'./static/big_front.jpg'));

server.get('/test/:id',(req,res)=>{
    console.log(req.query);
    console.log(req.params);
    // res.send('okok');
    // res.sendFile(path.resolve(__dirname,'./static/big_front.jpg'));

    // res.sendStatus(404);

    // res.redirect('https://www.hao123.com/'); //302

    // res.sendFile(path.resolve(__dirname,'./static/1.txt'));

    // res.download('static/big_front.jpg');
    // res.download('static/1.txt');
});
