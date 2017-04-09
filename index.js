"use strict"

const express = require('express');
const app = new express();
const cons = require('consolidate');
const fs = require('fs');
const path = require('path');
const port = 3000;


//router should be case sensitive and strict
app.enable('case sensitive routing');
app.enable('strict routing');
//should run fluently behind a proxy w/o revealing framework name to clients
app.set('x-powered-by',false);
app.set('trust proxy',true);
app.set('view cache',true);

app.engine('html',cons.swig);
app.set('view engine','html');
app.set('views',path.join(__dirname,'views'));

//accepts a route '/inverstors' and display a table of investors on template of your choice
app.get('/inventors',(req,res)=>{
    //use json data from inverstors.json
    const filePath = path.join(__dirname,'data/inventors.json');
    
    var obj = JSON.parse(fs.readFileSync(filePath,'utf8'));
    // var investors = {"investors" : obj};
    res.render('inventors',{"inventors" : obj});
});


app.listen(port,()=>{
    console.log("server is running at port "+port+"...");
});