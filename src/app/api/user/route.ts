import { NextRequest, NextResponse } from 'next/server'
import { getTokenData } from '@helpers/getTokenData'
import { connectToDb } from '@db/mongodb'
import User from '@models/users'


export async function GET(req: NextRequest) {
  connectToDb()

  try {
    const userID = getTokenData(req)
    const user = await User.findOne({ _id: userID }).select('-password')

    return NextResponse.json({
      message: 'User found',
      data: user
    })

  } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 400 })
  }
}
