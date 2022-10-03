import mongoose, { Schema } from 'mongoose'

const playerSchema = new Schema({
  playerName: {
    type: String
  },
  playerPosition: {
    type: String
  },
  playerDateOfBirth: {
    type: String
  },
  playerNationality: {
    type: String
  },
  playerTeam: {
    type: String
  }
})

const PlayerModel = mongoose.model('Player', playerSchema)

export default PlayerModel
