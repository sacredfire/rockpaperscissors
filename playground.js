var totalGames = 1
var compScore = 1
var userScore = 1

if (totalGames < 5 && !((compScore - userScore) > 2) && !((userScore - compScore) > 2)) {
  console.log('true')
}
else {
  console.log('false')
}
