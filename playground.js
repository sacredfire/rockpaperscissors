var totalGames = 4
var compScore = 0
var userScore = 2

function game () {
  if ((totalGames > 3 && ((compScore - userScore) > 1)) || (totalGames > 3 && ((userScore - compScore) > 1))) { 
    console.log('false1')
  }
  else if (totalGames < 5 && !((compScore - userScore) > 2) && !((userScore - compScore) > 2)) {
    console.log('true')
  } else {
    console.log('false')
  }
}

game()
