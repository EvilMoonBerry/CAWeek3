var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', async(req, res)=> {
  try{
    users.push ({
      name:req.body.name,
      task:req.body.task,
    })
    console.log(users);
  }
  catch{
    res.redirect('/')
  }
});

module.exports = router;
