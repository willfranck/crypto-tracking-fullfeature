import mongoose, { Connection } from 'mongoose'


export async function connectToDb(): Promise<Connection> {
  const options = {
    dbName: 'userdb'
  }

  mongoose.connect(process.env.MONGODB_URI!, options)
  const connection = mongoose.connection
  console.log('Connected to MongoDB')

  return connection
}
