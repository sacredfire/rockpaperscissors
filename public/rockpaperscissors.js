var userInput
var verifiedInput
var compPick

var compScore = 0
var userScore = 0
var totalGames = 0

game()

function game () {
  userInput = prompt('Do you choose rock, paper or scissors?')
  if (_verifyUserInput() !== 0) {
    document.write(_verifyUserInput())
    document.write(_compChoice())
    document.write(_compare(verifiedInput, compPick))
    totalGames++
    document.write('Total games played: ' + totalGames + '</br>')
    document.write('Total score: comp ' + compScore + ' : ' + userScore + ' you' + '</br>' + '</br>')
    game()
  } else {
    alert('Try again. You can only choose rock, paper or scissors.')
    game()
  }
}

function _verifyUserInput () {
  switch (userInput) {
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
      verifiedInput = '0'
      break
    default:
      verifiedInput = '0'
  }
  return 'You: ' + verifiedInput + '</br>'
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
