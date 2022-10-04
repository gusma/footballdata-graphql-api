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

  type Coach {
    coachId: ID
    coachName: String
    coachDateOfBirth: String
    coachNationality: String
    coachTeam: String
  }

  type Query {
    getAllLeagues: [League]
    getAllTeams: [Team]
    getAllPlayers: [Player]
    getAllCoaches: [Coach]
    getLeague(id: ID): League
    getTeam(id: ID): Team
    getPlayer(id: ID): Player
    getCoach(id: ID): Coach
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

  input CoachInput {
    coachName: String
    coachDateOfBirth: String
    coachNationality: String
    coachTeam: String
  }

  type Mutation {
    createLeague(league: LeagueInput): League
    importLeague(league: LeagueInput): League
    createTeam(team: TeamInput): Team
    createCoach(coach: CoachInput): Coach
    createPlayer(player: PlayerInput): Player
    updateLeague(id: ID!, league: LeagueInput): League
    updateCoach(id: ID!, coach: CoachInput): Coach
    updateTeam(id: ID!, team: TeamInput): Team
    updatePlayer(id: ID!, player: PlayerInput): Player
    deleteLeague(id: ID!): String
    deleteTeam(id: ID!): String
    deletePlayer(id: ID!): String
    deleteCoach(id: ID!): String
  }
`

export default typeDefs
