import mongoose, { Connection, Collection } from 'mongoose'

const options = {
  dbName: 'userdb',
}

export async function connectToMongoDb(): Promise<{db: Connection, collection: Collection}> {

  mongoose.connect(process.env.MONGODB_URI!, options)
  const db = mongoose.connection
  const collection = db.collection('users')

  return {db, collection}
}
