const { Schema, model } = require('mongoose')

const teamSchema = new Schema({
  teamTla: {
    type: String,
  },
  teamShortName: {
    type: String,
  },
  teamAreaName: {
    type: String,
  },
  teamAddress: {
    type: String,
  },
  teamLeague: {
    type: String,
  },
})

module.exports = model('Team', teamSchema)
