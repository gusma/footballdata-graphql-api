import mongoose, { Schema } from 'mongoose'

const leagueSchema = new Schema({
  leagueName: {
    type: String
  },
  leagueCode: {
    type: String
  },
  leagueAreaName: {
    type: String
  }
})

const LeagueModel = mongoose.model('League', leagueSchema)

export default LeagueModel
