import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'
import { connectToMongoDb } from '@lib/mongodb'


export async function GET(req: NextRequest) {
  if (req.method === 'GET') {
    try {
      const session = await getServerSession()

      if (!session || !session.user) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
      }

      const {collection} = await connectToMongoDb()

      const user = await collection.findOne({ email: session.user.email })
      
      if (!user) {
        return NextResponse.json({ message: 'User not found' }, { status: 404 })
      }

      const savedCoins = user.savedCoins

      return NextResponse.json(savedCoins, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ message: error }, { status: 500 })
    }

  } else {
      return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
  }
}
