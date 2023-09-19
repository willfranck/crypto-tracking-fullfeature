import mongoose, { Connection } from 'mongoose'


const options = {
  dbName: 'userdb',
}

export async function connectToMongoDb(): Promise<Connection> {

  mongoose.connect(process.env.MONGODB_URI!, options)
  const connection = mongoose.connection
  console.log('Connected to MongoDB')

  return connection
}
