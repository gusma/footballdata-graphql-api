import mongoose, { Schema } from 'mongoose'

const teamSchema = new Schema({
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
  }
})

const TeamModel = mongoose.model('Team', teamSchema)

export default TeamModel
