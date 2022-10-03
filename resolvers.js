import LeagueModel from './src/models/League.js'
import TeamModel from './src/models/Team.js'
import Player from './src/models/Player.js'
// import fetchLeague from './src/controllers/fetchLeague.js'

const resolvers = {
  Query: {
    getAllLeagues: async () => {
      const leagues = await LeagueModel.find()
      return leagues
    },
    getAllTeams: async () => {
      const teams = await TeamModel.find()
      return teams
    },
    getAllPlayers: async () => {
      const players = await Player.find()
      return players
    },
    getLeague: async (_, args) => {
      const league = await LeagueModel.findById(args.id)
      return league
    },
    getTeam: async (_, args) => {
      const team = await TeamModel.findById(args.id)
      return team
    },
    getPlayer: async (_, args) => {
      const player = await Player.findById(args.id)
      return player
    }
  },

  Mutation: {
    async createLeague (_, args) {
      const { leagueCode, leagueName, leagueAreaName } = args.league
      const newLeague = new LeagueModel({
        leagueCode,
        leagueName,
        leagueAreaName
      })
      await newLeague.save()
      return newLeague
    },
    createTeam: async (_, args) => {
      const { teamTla, teamShortName, teamAreaName, teamAddress, teamLeague } =
        args.team
      const newTeam = new TeamModel({
        teamTla,
        teamShortName,
        teamAreaName,
        teamAddress,
        teamLeague
      })
      await newTeam.save()
      return newTeam
    },
    createPlayer: async (_, args) => {
      const {
        playerName,
        playerPosition,
        playerDateOfBirth,
        playerNationality,
        playerTeam
      } = args.player
      const newPlayer = new Player({
        playerName,
        playerPosition,
        playerDateOfBirth,
        playerNationality,
        playerTeam
      })
      await newPlayer.save()
      return newPlayer
    },
    async deleteLeague (_, { id }) {
      await LeagueModel.findByIdAndDelete(id)
      return 'League deleted'
    },
    async deleteTeam (_, { id }) {
      await TeamModel.findByIdAndDelete(id)
      return 'Team deleted'
    },
    async deletePlayer (_, { id }) {
      await Player.findByIdAndDelete(id)
      return 'Player deleted'
    },
    async updateLeague (_, { league, id }) {
      const updatedLeague = await LeagueModel.findByIdAndUpdate(
        id,
        {
          $set: league
        },
        { new: true }
      )
      return updatedLeague
    },

    async importLeague (_, args) {
      const { leagueCode } = args
      const newLeague = new LeagueModel({ leagueCode })
      await newLeague.save()
      return {}
    },
    async updateTeam (_, { team, id }) {
      const updatedTeam = await TeamModel.findByIdAndUpdate(
        id,
        {
          $set: team
        },
        { new: true }
      )
      return updatedTeam
    },
    async updatePlayer (_, { player, id }) {
      const updatedPlayer = await Player.findByIdAndUpdate(
        id,
        {
          $set: player
        },
        { new: true }
      )
      return updatedPlayer
    }
  }
}

export default resolvers
