import CoachModel from '../models/Coach.js'

async function fetchCoaches (coach, teamShortName) {
  const Coach = new CoachModel({
    coachName: coach[0].name || 'N/A',
    coachDateOfBirth: coach[0].dateOfBirth || 'N/A',
    coachNationality: coach[0].nationality || 'N/A',
    coachTeam: teamShortName
  })
  Coach.save()
}

export default fetchCoaches
