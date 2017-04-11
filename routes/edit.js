var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')



router.get('/', function(req, res, next) {
  res.render('edit_form', );
});

router.get('/:id', function (req, res, next) {
  var id = req.params.id
  knex('movies').where('id', id).then(function(singleMovie) {
  res.render('movies/movies_show', {singleMovie})
  })
})

module.exports = router
