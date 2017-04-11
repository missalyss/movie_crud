var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')


////////////RENDERING PAGES///////////////
router.get('/', function(req, res, next) {
  knex('movies')
  .then(function(allMovies) {
    res.render('movies/movies', {
      allMovies
    })
  })
})

router.get('/new', function(req, res, next) {
  res.render('movies/new_movie')
})

// router.get('/:id/edit', function(req, res, next) {
//   res.render('movies/edit')
// })//this may go under the .get /:id//


router.get('/:id', function (req, res, next) {
  var id = req.params.id
  knex('movies').where('id', id).then(function(singleMovie) {
  res.render('movies/movies_show', {singleMovie})
  })
})

router.post('/', function (req, res, next) {
  var movie = {
    title, director, year, my_rating, poster_url } = req.body
  knex('movies').insert(movie, '*').then(function (newMovie) {
    var id = newMovie[0].id
    res.redirect(`/movies/${id}`)
  })
})


module.exports = router;
