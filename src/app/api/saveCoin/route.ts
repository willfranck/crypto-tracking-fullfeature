import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'
import { connectToMongoDb } from '@lib/mongodb'
import User from '@models/users'


export async function PATCH(req: NextRequest) {
  if (req.method === 'PATCH') {
    const {symbol} = await req.json()
    console.log(symbol)
    
    try {
      const session = await getServerSession()

      if (!session || !session.user) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
      }

      await connectToMongoDb()
      
      const user = await User.findOne({ email: session.user.email })
      console.log(user)
      

      if (!user) {
        return NextResponse.json({ message: 'User not found' }, { status: 404 })
      }

      user.savedCoins.push(symbol)

      await user.save()

      return NextResponse.json({ message: 'SavedCoins updated successfully' }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }

  } else {
      return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
  }
}
