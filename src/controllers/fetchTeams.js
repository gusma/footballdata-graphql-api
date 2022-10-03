import { UserInputError } from 'apollo-server-errors'
import fetch from 'node-fetch'
import TeamModel from '../models/Team.js'

async function fetchTeams (competitionCode) {
  const teamList = await fetch(`https://api.football-data.org/v4/competitions/${competitionCode}/teams`, {
    headers: { method: 'GET', 'X-AUTH-TOKEN': process.env.X_AUTH_TOKEN }
  })

  const response = await teamList.json()
  const { teams } = response
  const availableLeagues = ['CL', 'PPL', 'PL', 'DED', 'BL1', 'FL1', 'SA', 'PD', 'EL', 'BSA', 'WC']
  const selectedAvailableValue = availableLeagues.find(element => element === competitionCode)

  if (selectedAvailableValue) {
    for (const element of teams) {
      const Team = new TeamModel({
        teamTla: element.tla,
        teamShortName: element.shortName,
        teamAreaName: element.area.name,
        teamAddress: element.address,
        teamLeague: competitionCode
      })
      Team.save()
    }
  }
}

export default fetchTeams
