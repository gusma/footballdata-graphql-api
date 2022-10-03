import fetch from 'node-fetch'
import LeagueModel from '../models/League'

export default async function fetchLeague (areaCode) {
  const competition = await fetch(
    `https://api.football-data.org/v4/competitions/${areaCode}`,
    {
      headers: {
        method: 'GET',
        'X-AUTH-TOKEN': '962696d62ee94bb1b6f922e50fceac04'
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
