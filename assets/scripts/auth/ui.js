'use strict'

const app = require('../app.js')

const signUpSuccess = (data) => {
  app.user = data.user
  console.log(data)
  console.log('Successfully created account!')
  $('#sign-in-prompt').text('Created user ' + data.user.email)
  $('.user-signup')[0].reset()
}

const signUpFail = () => {
  console.log('Passwords did not match or username taken.')
  $('#sign-in-prompt').text('Could not make account. Please try again.')
  $('.user-signup')[0].reset()
}

const signInSuccess = (data) => {
  app.user = data.user
  console.log(data)
  console.log('Successfully signed in!')
  $('#sign-in-prompt').text('Signed in as ' + data.user.email)
  $('.user-signup').hide()
  $('.user-login').hide()
  $('.user-logout').show()
  $('#game-start-content').show()
  $('.new-game').show()
  $('#change-pw').show()
  $('#game-history-btn').show()
  $('.user-login')[0].reset()
  if (localStorage.getItem('game')) {
    $('#restore-game-btn').show()
  }
}

const signInFail = () => {
  console.log('Email/password combination not found')
  $('#sign-in-prompt').text('Email/password combination not found')
  $('.user-login')[0].reset()
}

const signOutSuccess = (data) => {
  app.user = null
  console.log(data)
  console.log('Successfully signed out!')
  $('#sign-in-prompt').text('Sign in to play!')
  $('.user-login').show()
  $('.user-signup').show()
  $('.user-logout').hide()
  $('#game-history-container').hide()
  $('#grid-container').hide()
  $('#game-start-content').hide()
  $('#game-history-btn').hide()
  $('#change-pw').hide()
  $('#save-game-btn').hide()
}

const changePasswordSuccess = (data) => {
  console.log('Password successfully changed.')
  $('#sign-in-prompt').text('Password successfully changed.')
  $('.change-password')[0].reset()
}

const changePasswordFail = () => {
  console.log('Email/password combination not found')
  $('#sign-in-prompt').text('Email/password combination not found')
  $('.change-password')[0].reset()
}

const success = (data) => {
  console.log(data)
}

const fail = (error) => {
  console.error(error)
}

module.exports = {
  fail,
  success,
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFail
}
