var express = require('express');
var router = express.Router();
var ctrlmage = require("../Controllers/mage")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PharmAssist' });
});
router.get('/prediction', function(req, res, next) {
  res.render('pred', { title: 'PharmAssist' });
});

router.post('/vpredict', function (req, res) {
  // create user in req.body
  console.log(req.body);
  res.send(req.body)
});

router.post('/predict', ctrlmage.pred);



module.exports = router;
