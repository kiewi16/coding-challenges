var games = {
    week1: [
        { badgers: 32, buckeyes: 49 },
        { hawkeyes: 14, wolverines: 0 },
        { spartans: 62, gophers: 31 },
        { cornhuskers: 32, lions: 54 }
    ],
    week2: [
        { badgers: 24, wolverines: 10 },
        { hawkeyes: 12, gophers: 28 },
        { cornhuskers: 9, buckeyes: 14 },
        { spartans: 3, lions: 17 }
    ],
    week3: [
        { spartans: 12, buckeyes: 19 },
        { badgers: 18, gophers: 6 },
        { hawkeyes: 30, lions: 21 },
        { cornhuskers: 42, wolverines: 14 },
    ],
    week4: [
        { spartans: 7, wolverines: 10 },
        { cornhuskers: 14, gophers: 56 },
        { hawkeyes: 6, buckeyes: 30 },
        { badgers: 28, lions: 13 }
    ],
    week5: [
        { wolverines: 21, lions: 49 },
        { hawkeyes: 17, spartans: 20 },
        { buckeyes: 62, gophers: 34 },
        { cornhuskers: 32, badgers: 54 }
    ],
}

// Given the scores of the games above, create a function that takes in a team name and outputs the team's winning record as a string
// i.e. (numberOfWins, numberOfLosses)

// Example 1:
// findRecord('buckeyes')
// => '(5, 0)'

// Example 2:
// findRecord('wolverines')
// => '(1, 4)'

// assumption is that we have access to the game variable (it is a global variable)
// assumption is that we don't have any ties 

// function findRecord (teamName)
// declare a variable called wins and assign it to the value of 0
// declare a variable called losses and assign it to the value of 0
// declare a variable called weeks and assign it to the value of Object.keys(games) (expected output weeks = [week1, week2, week3, week4, week5])

// use forEach to iterate over the weeks array
// for each week, access the array of game objects: games [week]
    // use forEach to iterate over the array of game objects for each week 
    // games[week].forEach(game) (expected output = { badgers: 32, buckeyes: 49 })
        // declare a variable called opponents and to assign it to the value of Object.keys(game) (expected output opponents = [badgers, buckeyes])
            // need to determine if the array of opponents includes the teamName and which opponent had the higher score
            
            // use forEach to iterate over the array of opponents
            // give forEach two arguments, the opponent and the index position
                // if the opponent is equal to the teamName AND the index position is 0
                    // declare a variable called homeTeamScore and set it to the value of game[opponent]
                    // declare a variable called awayTeam and set it to the value of the opponents[index + 1]
                    // declare a variable called awayTeamScore and set it to the value of the game[awayTeam]
                        // if the homeTeamScore is greater than the awayTeamScore, increment the wins variable
                        // else increment the losses variable
                // if the opoonent is equal to the teamName AND the index position in 1
                    // declare a variable called homeTeamScore2 and set it to the value of game[opponent]
                    // declare a variable called awayTeam2 and set it to the value of opponents[index -1]
                    // declare a variable called awayTeamScore2 and set it to the value of game[awayTeam2]
                        // if homeTeamScore2 is greater than awayTeamScore 2, increment the wins variable
                        // else increment the losses variable
// return [wins, losses]

// function findRecord(teamName) {
//     let wins = 0
//     let losses = 0
//     let weeks = Object.keys(games)

//     weeks.forEach(week => {
//         games[week].forEach(game => {
//             let opponents = Object.keys(game)
//             opponents.forEach((opponent, index) => {
//                 if (opponent === teamName && index === 0) {
//                     let homeTeamScore = game[opponent]
//                     let awayTeam = opponents[index + 1]
//                     let awayTeamScore = game[awayTeam]
//                     if (homeTeamScore > awayTeamScore) {
//                         wins++
//                     } else (losses++)
//                 }
//                 if (opponent === teamName && index === 1) {
//                     let homeTeamScore2 = game[opponent]
//                     let awayTeam2 = opponents[index - 1]
//                     let awayTeamScore2 = game[awayTeam2]
//                     if (homeTeamScore2 > awayTeamScore2) {
//                         wins++
//                     } else (losses++)
//                 }
//             })
//         })
//     })
//     return [wins, losses]
// }

const findRecord = (teamName) => {
    return Object.keys(games).reduce((record, week) => {
        games[week].forEach((game) => {
            if (Object.keys(game).includes(teamName)) {
                const scores = Object.values(game)
                const index = Object.keys(game).indexOf(teamName)
                scores[index] > scores[index === 0 ? 1 : 0] ? record[0]++ : record[1]++
            }
        })
        return record
    }, [0, 0])
}
console.log(findRecord('buckeyes'))
console.log(findRecord('wolverines'))