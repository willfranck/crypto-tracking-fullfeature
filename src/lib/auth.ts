import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { connectToDb } from './mongodb'
import User from '@models/users'


export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },

  providers: [
    CredentialsProvider({
      name: 'your Username',
      credentials: {
        username: {
          label: 'Username',
          type: 'username',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },

      async authorize(credentials: any) {
        try {
          await connectToDb()
          
          const user = await User.findOne({ username: credentials.username })
         
          if (user && user.password === credentials.password) {
            return { id: user._id, username: user.username, email: user.email }
            
          } else {
            return null
          }

        } catch (error: any) {
            console.log(error.message);
            return null
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
}
