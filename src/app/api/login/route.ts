import { NextRequest, NextResponse } from 'next/server'
import { connectToDb } from '@db/mongodb'
import bcrypt from 'bcrypt'
import User from '@models/users'
import jwt from 'jsonwebtoken'


export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const userData = await req.json()
    const { username, password } = userData

    try {
      await connectToDb()

      const user = await User.findOne({ username })
      if (!user) {
        return NextResponse.json({ error: 'User does not exist' }, { status: 400 })
      }

      const validPassword = await bcrypt.compare(password, user.password)
      if (!validPassword) {
        return NextResponse.json({ error: 'Invalid password' }, { status: 400 })
      }

      const tokenData = {
        id: user._id,
        email: user.email,
        username: user.username
      }

      const token = jwt.sign(
        tokenData,
        process.env.TOKEN_SECRET!,
        { expiresIn: '1d' }
      )

      const res = NextResponse.json({
        message: 'Login SUCCESSFUL',
        success: true
      })
      
      res.cookies.set(
        'Token', 
        token, 
        {httpOnly: true}
      )

      return res

    } catch (error) {
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
    }

  } else {
      return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
  }
}
