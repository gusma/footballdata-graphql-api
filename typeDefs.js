import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type League {
    id: ID
    leagueName: String
    leagueCode: String
    leagueAreaName: String
  }

  type Team {
    teamId: String
    teamTla: String
    teamShortName: String
    teamAreaName: String
    teamAddress: String
    teamLeague: String
  }

  type Player {
    playerId: ID
    playerName: String
    playerPosition: String
    playerDateOfBirth: String
    playerNationality: String
    playerTeam: String
  }

  type Query {
    getAllLeagues: [League]
    getAllTeams: [Team]
    getAllPlayers: [Player]
    getLeague(id: ID): League
    getTeam(id: ID): Team
    getPlayer(id: ID): Player
  }

  input LeagueInput {
    leagueName: String
    leagueCode: String
    leagueAreaName: String
  }

  input TeamInput {
    teamId: String
    teamTla: String
    teamShortName: String
    teamAreaName: String
    teamAddress: String
    teamLeague: String
  }

  input PlayerInput {
    playerName: String
    playerPosition: String
    playerDateOfBirth: String
    playerNationality: String
    playerTeam: String
  }

  type Mutation {
    createLeague(league: LeagueInput): League
    importLeague(league: LeagueInput): League
    createTeam(team: TeamInput): Team
    createPlayer(player: PlayerInput): Player
    updateLeague(id: ID!, league: LeagueInput): League
    updateTeam(id: ID!, team: TeamInput): Team
    updatePlayer(id: ID!, player: PlayerInput): Player
    deleteLeague(id: ID!): String
    deleteTeam(id: ID!): String
    deletePlayer(id: ID!): String
  }
`

export default typeDefs
