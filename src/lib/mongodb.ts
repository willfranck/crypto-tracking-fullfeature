import mongoose from 'mongoose'

export async function connectToDb() {
  try {
    mongoose.connect(process.env.MONGODB_URI!)
    const connection = mongoose.connection

    connection.on('connected', () => {
      console.log('Connected to MongoDB')
    })

    connection.on('error', (error: any) => {
      console.log('MongoDB connection error.  Make sure MongoDB is running.' + error);
      process.exit()
    })

  } catch (error) {
    console.log('Error connecting to MongoDB')
  }
}
