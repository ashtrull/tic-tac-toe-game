'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const app = require('../app.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const boxes = require('../game/turn.js')

const onNewGame = function (event) {
  event.preventDefault()
  console.log('Creating new game')
  // const data = getFormFields(event.target)
  api.createGame()
    .done(ui.success)
    .fail(ui.fail)
}

const onNewMove = function (id, event) {
  console.log('Adding new move')
  const data = event.target[id]
  api.updateGame(this.id, boxes[this.id].value, false)
    .done(ui.success)
    .fail(ui.fail)
}

const onGameOver = function (event) {
  console.log('Adding game over')
  api.endGame(true)
    .done(ui.success)
    .fail(ui.fail)
}

// const onSignIn = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.signIn(data)
//     .done(ui.signInSuccess)
//     .fail(ui.signInFail)
// }
//
// const onSignOut = function (event) {
//   event.preventDefault()
//   // const data = getFormFields(event.target)
//   api.signOut()
//     .done(ui.signOutSuccess)
//     .fail(ui.fail)
// }
//
// const onChangePassword = function (event) {
//   console.log('change your password')
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.changePassword(data)
//     .done(ui.changePasswordSuccess)
//     .fail(ui.changePasswordFail)
// }

const addHandlers = () => {
//  $('.user-signup').on('submit', authEvents.onSignUp)
//  $('.user-login').on('submit', authEvents.onSignIn)
//  $('#change-pw').on('click', authEvents.onChangePassword)
//  $('#sign-out').on('submit', authEvents.onSignOut)
}

module.exports = {
  addHandlers,
  app,
  getFormFields,
  onNewGame,
  onNewMove,
  onGameOver
}
