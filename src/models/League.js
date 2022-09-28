const { Schema, model } = require('mongoose')

const leagueSchema = new Schema({
  leagueName: {
    type: String,
  },
  leagueCode: {
    type: String,
  },
  leagueAreaName: {
    type: String,
  },
})

module.exports = model('League', leagueSchema)
