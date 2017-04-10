'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', function(table) {
    table.increments()
    table.string('title').notNullable().defaultTo('')
    table.string('director').notNullable().defaultTo('')
    table.integer('year').notNullable().defaultTo(1990)
    table.string('my_rating').notNullable().defaultTo('')
    table.text('poster_url').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies')
}
