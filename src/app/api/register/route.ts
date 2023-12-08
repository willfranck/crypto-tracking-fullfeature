import { NextRequest, NextResponse } from 'next/server'
import { connectToMongoDb } from '@lib/mongodb'
import bcrypt from 'bcrypt'
import User from '@models/users'


export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const userData = await req.json()
    const { email, username, password } = userData

    try {
      await connectToMongoDb()

      const existingUser = await User.findOne({ email })
      if (existingUser) {
        return NextResponse.json({ error: 'User already exists' }, { status: 409 })
      }

      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)

      const newUser = new User({
        email,
        username,
        password: hashedPassword,
      })

      await newUser.save()

      return NextResponse.json({ message: 'User created successfully' }, { status: 201 })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
    
  } else {
      return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
  }
}
