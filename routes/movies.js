var express = require('express');
var router = express.Router();

/* GET movies listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/:id')

module.exports = router;