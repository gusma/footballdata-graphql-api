const League = require('./src/models/League')
const Team = require('./src/models/Team')

const resolvers = {

    Query: {
        hello: () => "Hello world",
        getAllLeagues: async () => { 
            const leagues = await League.find()
            return leagues
        },
        getAllTeams: async () => { 
            const teams = await Team.find()
            return teams
        },
        getAllPlayers: async () => { 
            const players = await Player.find()
            return players
        }

    },

    Mutation: {
        createLeague: async (_, args) => { 
            const { leagueCode, leagueName, leagueAreaName } = args
            const newLeague = new League({ leagueCode, leagueName, leagueAreaName })
            await newLeague.save()
            return newLeague
        },
        createTeam: async (_, args) => { 
            const { teamTla, teamShortName, teamAreaName, teamAddress, teamLeague } = args
            const newTeam = new League({ teamTla, teamShortName, teamAreaName, teamAddress, teamLeague })
            await newTeam.save()
            return newTeam
        },
        createPlayer: async (_, args) => { 
            const { playerName, playerPosition, playerDateOfBirth, playerNationality } = args
            const newPlayer = new Player({ playerName, playerPosition, playerDateOfBirth, playerNationality, playerTeam })
            await newPlayer.save()
            return newPlayer
        },
        importLeague: async (_, args) => {
            const { leagueCode } = args
            const newLeague = new League({ leagueCode })
            await newLeague.save()
            return {}

        }
        
    }

}

module.exports = {resolvers}