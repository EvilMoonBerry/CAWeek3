const exp = require('constants');
var express = require('express');
var router = express.Router();
const fs = require("fs");
router.use(express.json())
const map = new Map();
usersList = []

let mes = {"messageadd" : "User added"}
let mes2 = {"messageadd" : "Todo added"}

router.post('/', function(req, res,next) {

   let username = req.body.name
   let task = req.body.todo

    let i = 0;
    let todoList=[];
    let x=0;
   
    for(i;i<usersList.length;i++){
        
        if(usersList[i].name===username){    
            usersList[i].todo.push(task)
            x =1
            res.send(mes2);
            break;
        }
    }
    if (x!==1){
        todoList.push(task)
        usersList.push({name:username,todo:todoList})
        res.send(mes);
        
    }
    
    console.log("serveri saavutettu") 
    console.log(usersList)
    
});

module.exports = router;
