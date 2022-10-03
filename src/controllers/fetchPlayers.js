import TeamModel from '../models/Team.js'
import PlayerModel from '../models/Player.js'
import fetchCoaches from './fetchCoaches.js'

async function fetchPlayers (leagueCode) {
  const leagueAvailable = await TeamModel.find(
    { teamLeague: leagueCode },
    'coach teamSquad teamShortName'
  )

  for (const item of leagueAvailable) {
    const { teamSquad, coach, teamShortName } = item

    if (teamSquad.length >= 1) {
      for (const element of teamSquad) {
        const Player = new PlayerModel({
          playerName: element.name,
          playerPosition: element.position,
          playerDateOfBirth: element.dateOfBirth,
          playerNationality: element.nationality,
          playerTeam: teamShortName
        })
        Player.save()
      }
      fetchCoaches(coach, teamShortName)
    } else {
      fetchCoaches(coach, teamShortName)
    }
  }
}

export default fetchPlayers
