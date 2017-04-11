
exports.seed = function(knex, Promise) {
  return knex('movies').del()
    .then(function () {
      return knex('movies').insert([{
          id: 1,
          title:'Star Trek: Generations',
          director:'David Carson',
          year:1994,
          my_rating: '🖖🏼 🖖🏼 🖖🏼 🖖🏼 🖖🏼',
          poster_url: '../images/generations.jpg'
        },{
          id: 2,
          title:'Star Trek: First Contact',
          director:'Jonathan Frakes',
          year:1996,
          my_rating: '🖖🏼',
          poster_url: '../images/first_contact.jpg'
        },
        {
          id: 3,
          title: 'Two Brothers',
          director: 'Jan Michael Vincent',
          year: 2017,
          my_rating: '🔥 🔥 🔥 🔥 🔥',
          poster_url: '../images/two_brothers.jpg'
        },
        {
          id: 4,
          title: 'Jan Quadrant Vincent 16',
          director: 'Jerry Smith',
          year: 2016,
          my_rating: '💥 💥 💥 💥',
          poster_url: '../images/jan_vincent.jpg'
        }
      ])
    }).then(() => {
      return knex.raw(
        "SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies));"
      )
    }).catch(function(error){
      console.error("Red Alert!", error);
    })
}
