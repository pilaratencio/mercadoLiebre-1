const express = require("express");
const { resolve } = require("path");
const app = express();
const path = require('path');
const { send } = require("process");
const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

app.set('puerto',process.env.PORT ||3000);

app.get('/',(req,res)=>res.sendFile(path.resolve(__dirname,'./views/home.html')))

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + "/views/login.html");
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.listen(app.get('puerto'), ()=>console.log('Servidor corriendo de manera satisfactoria'));






