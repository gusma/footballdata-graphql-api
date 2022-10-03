import fetch from 'node-fetch'
import LeagueModel from '../models/League.js'

async function fetchLeague (areaCode) {
  const competition = await fetch(
    `https://api.football-data.org/v4/competitions/${areaCode}`,
    {
      headers: {
        method: 'GET',
        'X-AUTH-TOKEN': process.env.X_AUTH_TOKEN
      }
    }
  )

  const response = await competition.json()

  if (!response || response.length === 0) {
    console.log('No competitions available with that name')
  } else {
    const importedLeague = new LeagueModel({
      leagueName: response.name,
      leagueCode: response.code,
      leagueAreaName: response.area.name
    })
    importedLeague.save()
  }
}

export default fetchLeague
