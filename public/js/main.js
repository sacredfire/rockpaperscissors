var userInput
var verifiedInput
var compPick

var compScore = 0
var userScore = 0
var totalGames = 0
var gamesLeft = 5 - totalGames

document.write('Welcome! We\'ll play up to five rounds to determine the winner!' + '</br>' + '</br>')

game()

function game () {
  if (gamesLeft < 2 && !((compScore - userScore) >= 2) && !((userScore - compScore) >= 2)) {
    gamePlay()
  } else if (gamesLeft >= 5 && !((compScore - userScore) > 2) && !((userScore - compScore) > 2)) {
    gamePlay()
  } else {
    gameOver()
  }
}

function gamePlay () {
  userInput = prompt('Do you choose rock, paper or scissors?')
  if (_verifyUserInput() === 'cancel') {
    document.write('You have cancelled the game! Reload page to try again!')
  } else if (_verifyUserInput() !== false) {
    document.write('You: ' + verifiedInput + '</br>')
    document.write(_compChoice())
    document.write(_compare(verifiedInput, compPick))
    totalGames++
    document.write('Rounds played: ' + totalGames + '</br>')
    document.write('Score: comp ' + compScore + ' : ' + userScore + ' you' + '</br>' + '</br>')
    game()
  } else {
    alert('Try again. You can only choose rock, paper or scissors.' + '\n' + '(or press \'C\' to Cancel)')
    game()
  }
}

function gameOver () {
  if (compScore > userScore) {
    document.write('Game over! Computer wins! Reload page to try again!' + '</br>')
  } else if (compScore === userScore) {
    document.write('Game over! It\'s a tie! Reload page to try again!' + '</br>')
  } else {
    document.write('Game over! You win! Reload page to try again!' + '</br>')
  }
}

function _verifyUserInput () {
  switch (userInput) {
    case 'cancel':
      verifiedInput = 'cancel'
      break
    case 'c':
      verifiedInput = 'cancel'
      break
    case 'paper':
      verifiedInput = 'paper'
      break
    case 'rock':
      verifiedInput = 'rock'
      break
    case 'scissors':
      verifiedInput = 'scissors'
      break
    case 'p':
      verifiedInput = 'paper'
      break
    case 'r':
      verifiedInput = 'rock'
      break
    case 's':
      verifiedInput = 'scissors'
      break
    case '':
      verifiedInput = false
      break
    default:
      verifiedInput = false
  }
  return verifiedInput
}

function _compChoice () {
  if (Math.random() < 0.34) {
    compPick = 'rock'
  } else if (Math.random() <= 0.67) {
    compPick = 'paper'
  } else {
    compPick = 'scissors'
  }
  return 'Computer: ' + compPick + '</br>'
}

function _compare (choice1, choice2) {
  if (choice1 === choice2) { return 'The result is a tie!' + '</br>' }

  else if (choice1 === 'rock') {
    if (choice2 === 'scissors') { userScore++; return 'rock wins' + '</br>' }
    else { compScore++; return 'paper wins' + '</br>' }
  }

  else if (choice1 === 'paper') {
    if (choice2 === 'rock') { userScore++; return 'paper wins' + '</br>' }
    else { compScore++; return 'scissors win' + '</br>' }
  }

  else if (choice1 === 'scissors') {
    if (choice2 === 'rock') { compScore++; return 'rock wins' + '</br>' }
    else { userScore++; return 'scissors win' + '</br>' }
  }
}

