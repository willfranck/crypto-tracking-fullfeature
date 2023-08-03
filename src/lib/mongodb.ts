import mongoose from 'mongoose'

export async function connectToDb() {
  try {
    mongoose.connect(process.env.MONGODB_URI!)
    const connection = mongoose.connection

    connection.on('connected', () => {
      console.log('Connected to MongoDB')
    })

    connection.on('error', (err) => {
      console.log('MongoDB connection error.  Make sure MongoDB is running.' + err);
      process.exit()
    })

  } catch (err) {
    console.log('Error connecting to MongoDB')
  }
}
