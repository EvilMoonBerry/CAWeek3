var express = require('express');
var router = express.Router();
const fs = require("fs");
const map = new Map();
todoList = []

let mes = {messageadd : "user added"}
let mes2 = {messageadd : "task added"}

router.post('/', function(req, res,next) {
    
    const data = {
        name: req.body.name,
        task: req.body.task
    }
    
    console.log(req.body);
    let i = 0;
    let x = 0;
    let listkeys = Object.keys(todoList)
    for(i;i<todoList.length;i++){
        if(data.name !== listkeys[i]){
            x=0
        }else{
            x=1
            break
        }
    
    }
    if (x==0){
        todoList.push(data)
        res.send(mes);
        //res.send(req.body);
    }else{
        res.send(mes2);
        //res.send(req.body);
    }
    
   res.end();

    
    console.log("serveri saavutettu") 

    //res.send('{"hello":"testi"}') Mare
});

module.exports = router;
