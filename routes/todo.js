var express = require('express');
var router = express.Router();


router.post('/', async(req, res)=> {
    
    const data = {
        name: req.body.name,
        task: req.body.task
    }
    
    data.push(req.body);

    res.json(data)
});

module.exports = router;
