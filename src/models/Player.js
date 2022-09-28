const { Schema, model } = require('mongoose')

const playerSchema = new Schema({
  playerName: {
    type: String,
  },
  playerPosition: {
    type: String,
  },
  playerDateOfBirth: {
    type: String,
  },
  playerNationality: {
    type: String,
  },
  playerTeam: {
    type: String
  }
})

module.exports = model('Player', playerSchema)