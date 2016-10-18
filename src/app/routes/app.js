var express = require('express');
var router = exress.Router();
// var User('../models/user');

router.get('/', function (req, res, next) {
  res.render('index');
});

module.exports = router;
