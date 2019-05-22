var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('reactjs/index', { title: 'Reactjs index' });
});

router.get('/demo1', function(req, res, next) {
  res.render('reactjs/demo1', { title: 'Reactjs demo1: Add react to a website' });
});

module.exports = router;
