var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')

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

router.get('/:id/edit', function(req, res, next) {
  knex('movies').where('id', req.params.id).first().then(function (thisMovie) {
    console.log(thisMovie);
    res.render('movies/edit', {thisMovie})

  })
})

router.get('/:id', function (req, res, next) {
  var id = req.params.id
  knex('movies').where('id', id).then(function(singleMovie) {
  res.render('movies/movies_show', {singleMovie})
  })
})

router.post('/', function (req, res, next) {
  var movie = {
    title, director, year, my_rating, poster_url } = req.body

    if (!title || !director || !year || !my_rating || !poster_url) {
      var error = "One of your fields is empty. They must all be filled before submit!"
      res.render('movies/new_movie', {error})
    } else if (isNaN(parseInt(year, 10))) {
      var error = "Your year needs to be a number"
      res.render('movies/new_movie', {error})
    } else if (!poster_url.match(/.jpg/gi)){
      var error = "Your image url needs to be a jpg. Sorry."
      res.render('movies/new_movie', {error})
    } else {
    knex('movies').insert(movie, '*').then(function (newMovie) {
      var id = newMovie[0].id
      res.redirect(`/movies/${id}`)
    })
  }
})

router.delete('/:id', function (req, res, next) {
  var id = req.params.id
  knex('movies').del().where('id', id).then(function () {
    res.redirect('/movies')
  })
})

router.put('/:id', function (req, res, next) {
  var id = req.params.id
  var movie = {
    title: req.body['title'],
    director: req.body['director'],
    year: req.body['year'],
    my_rating: req.body['my_rating'],
    poster_url: req.body['poster_url']
  }
  knex('movies').where({ id }).update(movie).then(function (updatedMovie) {
    res.redirect(`/movies/${id}`)
  })
})

module.exports = router;
