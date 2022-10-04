import LeagueModel from './src/models/League.js'
import TeamModel from './src/models/Team.js'
import PlayerModel from './src/models/Player.js'
import CoachModel from './src/models/Coach.js'
import fetchLeague from './src/controllers/fetchLeague.js'
import fetchTeams from './src/controllers/fetchTeams.js'
import fetchPlayers from './src/controllers/fetchPlayers.js'
import { UserInputError } from 'apollo-server-errors'

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
      const players = await PlayerModel.find()
      return players
    },
    getAllCoaches: async () => {
      const coaches = await CoachModel.find()
      return coaches
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
      const player = await PlayerModel.findById(args.id)
      return player
    },
    getCoach: async (_, args) => {
      const coach = await CoachModel.findById(args.id)
      return coach
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
      const {
        teamTla,
        teamShortName,
        teamAreaName,
        teamAddress,
        teamLeague,
        teamSquad,
        coach
      } = args.team
      const newTeam = new TeamModel({
        teamTla,
        teamShortName,
        teamAreaName,
        teamAddress,
        teamLeague,
        teamSquad,
        coach
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
      const newPlayer = new PlayerModel({
        playerName,
        playerPosition,
        playerDateOfBirth,
        playerNationality,
        playerTeam
      })
      await newPlayer.save()
      return newPlayer
    },
    createCoach: async (_, args) => {
      const {
        coachName,
        coachDateOfBirth,
        coachNationality,
        coachTeam
      } = args.coach
      const newCoach = new CoachModel({
        coachName,
        coachDateOfBirth,
        coachNationality,
        coachTeam
      })
      await newCoach.save()
      return newCoach
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
      await PlayerModel.findByIdAndDelete(id)
      return 'Player deleted'
    },
    async deleteCoach (_, { id }) {
      await CoachModel.findByIdAndDelete(id)
      return 'Coach deleted'
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
      const updatedPlayer = await PlayerModel.findByIdAndUpdate(
        id,
        {
          $set: player
        },
        { new: true }
      )
      return updatedPlayer
    },
    async updateCoach (_, { coach, id }) {
      const updatedCoach = await CoachModel.findByIdAndUpdate(
        id,
        {
          $set: coach
        },
        { new: true }
      )
      return updatedCoach
    },

    async importLeague (_, args) {
      const { leagueCode } = args.league
      const leagueAvailable = await LeagueModel.find({ leagueCode })
      if (leagueAvailable.length === 0) {
        fetchLeague(leagueCode)
        console.log('Fetch League')
        await fetchTeams(leagueCode)
        console.log('Fetch Teams')
        await fetchPlayers(leagueCode)
        console.log('Fetch Players & Coaches')
        const newLeague = new LeagueModel({ leagueCode })
        return newLeague
      }
      throw new UserInputError(
        'Sorry, that league already exists in our records.'
      )
    }
  }
}

export default resolvers
