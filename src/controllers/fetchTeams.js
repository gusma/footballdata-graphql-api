import fetch from 'node-fetch'
import TeamModel from '../models/Team.js'

async function fetchTeams (leagueCode) {
  const teamList = await fetch(
    `https://api.football-data.org/v4/competitions/${leagueCode}/teams`,
    {
      headers: { method: 'GET', 'X-AUTH-TOKEN': process.env.X_AUTH_TOKEN }
    }
  )

  const response = await teamList.json()
  const { teams } = response
  const availableLeagues = [
    'CL',
    'PPL',
    'PL',
    'DED',
    'BL1',
    'FL1',
    'SA',
    'PD',
    'EL',
    'BSA',
    'WC'
  ]
  const selectedAvailableValue = availableLeagues.find(
    (element) => element === leagueCode
  )

  if (selectedAvailableValue) {
    for (const element of teams) {
      const Team = new TeamModel({
        teamId: element.id,
        teamTla: element.tla,
        teamShortName: element.shortName,
        teamAreaName: element.area.name,
        teamAddress: element.address,
        teamSquad: element.squad,
        coach: element.coach,
        teamLeague: leagueCode
      })
      Team.save()
    }
  }
}

export default fetchTeams
