'use strict'

const checkWin = require('./win.js')

let turn = 'X'

if (turn === 'X') {
  console.log("It is X's turn!")
} else {
  console.log("It is O's turn!")
}

const winFunc = function () {
  console.log(turn + ' wins!')
  $('#game-prompt').html(turn + ' wins! Game Over.')
  $('.game.box').off()
  if (turn === 'X') {
    xScore += 1
    $('#xscore').html(xScore)
    return xScore
  } else {
    oScore += 1
    $('#oscore').html(oScore)
    return oScore
  }
}

const boxes = [
  {index: 0, value: 0},
  {index: 1, value: 0},
  {index: 2, value: 0},
  {index: 3, value: 0},
  {index: 4, value: 0},
  {index: 5, value: 0},
  {index: 6, value: 0},
  {index: 7, value: 0},
  {index: 8, value: 0}
]

let moveCounter = 0

let xScore = 0
let oScore = 0

const checkForWin = function () {
  for (let i = 0; i < 9; i++) {
    if (i === 0 | i === 3 | i === 6 && boxes[i].value !== 0 && boxes[i].value === boxes[i + 1].value && boxes[i].value === boxes[i + 2].value) {
      winFunc()
      console.log(boxes)
      return boxes
    } else if (i === 0 | i === 1 | i === 2 && boxes[i].value !== 0 && boxes[i].value === boxes[i + 3].value && boxes[i].value === boxes[i + 6].value) {
      winFunc()
    } else if (i === 0 && boxes[0].value !== 0 && boxes[0].value === boxes[4].value && boxes[0].value === boxes[8].value) {
      winFunc()
      return turn
    } else if (i === 2 && boxes[2].value !== 0 && boxes[2].value === boxes[4].value && boxes[2] === boxes[6].value) {
      winFunc()
      return turn
    } else {
      moveCounter += 1
      if (moveCounter >= 9) {
        $('#game-prompt').html('Cat\'s Game! Game Over.')
        $('.game.box').off()
      } else if (turn === 'X') {
        turn = 'O'
        $('#game-prompt').html('It is Oliver\'s turn!')
        return turn
      } else {
        turn = 'X'
        $('#game-prompt').html('It is Xavier\'s turn!')
        return turn
      }
    }
  }
}

const onPlaceMarker = function (id) {
  if (turn === 'X' && boxes[id].value === 0) {
    boxes[id].value = 'X'
    console.log(boxes[id].value)
    console.log(boxes)
    if (boxes[id].value === 'X') {
      document.getElementById(id).innerHTML = "<img src='http://www.pngall.com/wp-content/uploads/2016/05/Kitten-PNG-HD.png' alt='kitten' style='width:80px; height:80px'>"
    } if (boxes[id].value === 'O') {
      document.getElementById(id).innerHTML = "<img src='http://www.pngall.com/wp-content/uploads/2016/05/Kitten-PNG.png' style='width:80px; height:80px'>"
    }
    // document.getElementById(id).innerHTML = "<img src='/assets/images/kitten-xavier.png' alt='kitten' style='width:80px; height:80px'>"
    checkForWin()
    return boxes
  } else if (turn === 'O' && boxes[id].value === 0) {
    boxes[id].value = 'O'
    console.log(boxes[id].value)
    console.log(boxes)
    if (boxes[id].value === 'X') {
      document.getElementById(id).innerHTML = "<img src='http://www.pngall.com/wp-content/uploads/2016/05/Kitten-PNG-HD.png' alt='kitten' style='width:80px; height:80px'>"
    } if (boxes[id].value === 'O') {
      document.getElementById(id).innerHTML = "<http://www.pngall.com/wp-content/uploads/2016/05/Kitten-PNG.png' style='width:80px; height:80px'>"
    }
    // document.getElementById(id).innerHTML = "<img src='/assets/images/kitten-oliver.png' style='width:80px; height:80px'>"
    checkForWin()
    return boxes
  }
}

const showImage = function (id) {
  if (boxes[id].value === 'X') {
    document.getElementById(id).innerHTML = "<img src='http://www.pngall.com/wp-content/uploads/2016/05/Kitten-PNG-HD.png' alt='kitten' style='width:80px; height:80px'>"
  } if (boxes[id].value === 'O') {
    document.getElementById(id).innerHTML = "<http://www.pngall.com/wp-content/uploads/2016/05/Kitten-PNG.png' style='width:80px; height:80px'>"
  }
}

const resetGame = function () {
  boxes.map(function (x) {
    x.value = 0
    return x
  })
}

module.exports =
{
  turn,
  onPlaceMarker,
  checkForWin,
  winFunc,
  resetGame
}
