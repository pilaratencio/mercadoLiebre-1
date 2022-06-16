const express = require("express");
const { resolve } = require("path");
const app = express();
const path = require('path');
const { send } = require("process");
const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

app.listen('4000', ()=>console.log('Servidor corriendo en puerto 4000'))

app.get('/',(req,res)=>res.sendFile(path.resolve(__dirname,'./views/home.html')))





