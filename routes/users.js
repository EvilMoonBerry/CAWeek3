var express = require('express');
var router = express.Router();

router.get('/', async(req, res)=> {
    
    /*const data = {
        name: req.body.name,
        task: req.body.task
    }
    
    data.push(req.body);

    res.json(data)*/
    console.log("serveri saavutettu")
    res.send("Hello")
});


module.exports = router;
