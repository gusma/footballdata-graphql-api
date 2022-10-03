import mongoose, { Schema } from 'mongoose'

const coachSchema = new Schema({
  coachName: {
    type: String
  },
  coachDateOfBirth: {
    type: String
  },
  coachNationality: {
    type: String
  },
  coachTeam: {
    type: String
  }
})

const CoachModel = mongoose.model('Coach', coachSchema)

export default CoachModel
