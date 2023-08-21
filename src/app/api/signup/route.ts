import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import { connectToDb } from '@db/mongodb'
import bcrypt from 'bcrypt'
import User from '@models/users'


export async function POST(req: NextApiRequest) {
  if (req.method === 'POST') {
    const { email, username, password } = req.body

    try {
      await connectToDb()

      const existingUser = await User.findOne({ email })
      if (existingUser) {
        console.log(existingUser.email + ' already exists')
        return NextResponse.json({ error: 'User already exists' }, {status: 409})
      }

      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)

      const newUser = new User({
        email,
        username,
        password: hashedPassword,
      })

      const savedUser = await newUser.save()
      console.log(savedUser)

      return NextResponse.json({ message: 'User created successfully' }, {status: 201})

    } catch (error) {
      return NextResponse.json({ error: 'An error occurred' }, {status: 500})
    }

  } else {
    return NextResponse.json({ error: 'Method not allowed' }, {status: 405})
  }
}
