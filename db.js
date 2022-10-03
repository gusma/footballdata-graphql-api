import mongoose from 'mongoose'

export default async function connectDB () {
  try {
    await mongoose.connect(process.env.DB_PATH)
    console.log('MongoDB connected')
  } catch (err) {
    console.log(
      "There's trouble connecting to your DB. Please check your configuration",
      err
    )
  }
}
