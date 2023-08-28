import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDb } from '@lib/mongodb'
import bcrypt from 'bcrypt'
import User from '@models/users'


export async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, username, password } = req.body

    try {
      await connectToDb()

      const existingUser = await User.findOne({ email })
      if (existingUser) {
        console.log(existingUser.email + ' already exists')
        return res.status(409).json({ error: 'User already exists' })
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

      return res.status(201).json({ message: 'User created successfully' })

    } catch (error) {
      return res.status(500).json({ error: 'An error occurred' })
    }

  } else {
    return res.status(405).json({ error: 'Method not allowed' })
  }
}
