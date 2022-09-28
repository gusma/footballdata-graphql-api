const { gql } = require('apollo-server-express')

const typeDefs = gql`

type League {
    leagueName: String
    leagueCode: String
    leagueAreaName: String
}

type Team {
    teamTla: String
    teamShortName: String
    teamAreaName: String
    teamAddress: String
    teamLeague: String
}

type Player {
    playerName: String,
    playerPosition: String,
    playerDateOfBirth: String,
    playerNationality: String,
    playerTeam: String,
}

type Query {
    hello: String
    getAllLeagues: [League]
    getAllTeams: [Team]
    getAllPlayers: [Player]
}

type Mutation {
    createLeague(leagueName: String, leagueCode: String, leagueAreaName: String): League
    importLeague(leagueName: String, leagueCode: String, leagueAreaName: String): League
    createTeam(
    teamTla: String
    teamShortName: String
    teamAreaName: String
    teamAddress: String
    teamLeague: String): Team
    createPlayer(playerName: String,
    playerPosition: String,
    playerDateOfBirth: String,
    playerNationality: String,
    playerTeam: String): Player
}
`

module.exports = {typeDefs}