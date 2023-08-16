import { NextRequest, NextResponse } from 'next/server'
import { connectToDb } from '@db/mongodb'
import User from '@models/users'
import bcrypt from 'bcrypt'


export async function POST(req: NextRequest) {
  try {
    await connectToDb()

    const reqBody = await req.json()
    const { email, username, password } = reqBody

    const user = await User.findOne({ email })
    if (user) {
      console.log(user.email + ' already exists');
      return NextResponse.json({ error: 'User already exists' })
    }

    const salt= await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    
    const newUser = new User({
      email,
      username,
      password: hashedPassword
    })

    const savedUser = await newUser.save()
    console.log(savedUser)

    return NextResponse.json({ message: 'User created successfully' })

  } catch (error) {
      return NextResponse.json({ error: 'An error occurred' })
  }
}
