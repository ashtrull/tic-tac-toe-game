'use strict'
const app = require('../app.js')
const config = require('../config.js')

// AJAX POST for new game
const createGame = function () {
  console.log(app.user.token)
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const index = function () {
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateGame = function (index, value, over) {
  console.log(index, value, over)
  return $.ajax({
    url: app.host + '/games/' + app.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': over
      }
    }
  })
}

const gameHistory = function (data) {
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

// const joinGame = function (data) {
//   return $.ajax({
//     url: app.host + '/games/' + data.game.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token' + app.user.token
//     },
//     data: data
//   })
// }

const showGame = function (id) {
  return $.ajax({
    url: app.host + '/games/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const restoreGame = function (gameId) {
  console.log(gameId)
  console.log(app.user.token)
  return $.ajax({
    url: app.host + '/games/' + gameId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  app,
  config,
  createGame,
  index,
  updateGame,
  gameHistory,
  // joinGame,
  showGame,
  restoreGame
}
