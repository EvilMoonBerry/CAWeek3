var express = require('express');
var router = express.Router();


router.post('/todo', async(req, res)=> {
    
    const data = {
        name: "",
        task:""
    }
    data.push(req.body);

    res.send(req.body);
});

module.exports = router;
