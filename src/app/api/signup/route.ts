import { connectToDb } from '@db/mongodb'
import { NextRequest, NextResponse } from 'next/server'
import User from '@models/users'
import bcryptjs from 'bcryptjs'


connectToDb()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const {email, username, password, isVerified, isAdmin} = reqBody
    console.log(reqBody);

    // Performs a check if User already exists
    const existingUser = await User.findOne({email})
    if (existingUser) {
      return NextResponse.json({error: 'This user already exists'},
      {status: 400})
    }

    // Hash Password
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)

    // Create a new User
    const newUser = new User ({
      email,
      username,
      password: hashedPassword,
      isVerified,
      isAdmin
    })

    const savedUser = await newUser.save()

    return NextResponse.json({
      message: 'User created successfully',
      success: true,
      savedUser
    })

    
  } catch (error: any) {
      return NextResponse.json({error: error.message},
      {status: 500})
  }
}
