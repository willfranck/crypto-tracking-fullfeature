import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { connectToDb } from './mongodb'
import { compare } from 'bcrypt'
import User from '@models/users'


export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/pages/login',
  },

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

          if (user && (await compare(credentials.password, user.password))) {
            return {
              id: user._id,
              name: user.username,
              email: user.email,
            }

          } else {
            return null
          }
          
        } catch (error: any) {
          console.log(error.message)
          return null
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      }
    },

    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        }
      }
      return token
    },
  },
}
