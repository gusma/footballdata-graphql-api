import mongoose, { Schema } from 'mongoose'

const teamSchema = new Schema({
  teamId: {
    type: String
  },
  teamTla: {
    type: String
  },
  teamShortName: {
    type: String
  },
  teamAreaName: {
    type: String
  },
  teamAddress: {
    type: String
  },
  teamLeague: {
    type: String
  },
  teamSquad: {
    type: Array
  },
  coach: {
    type: Array
  }
})

const TeamModel = mongoose.model('Team', teamSchema)

export default TeamModel
