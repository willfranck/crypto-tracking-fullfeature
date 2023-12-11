import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import { MongoClient } from 'mongodb'
import { connectToMongoDb } from '@lib/mongodb'
import { compare } from 'bcrypt'
import User from '@models/users'


const clientPromise: Promise<MongoClient> = MongoClient.connect(process.env.MONGODB_URI!)

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),

  pages: {
    signIn: '/signin',
  },

  session: {
    strategy: 'jwt',
    maxAge: 60 * 60,
  },

  providers: [
    CredentialsProvider({
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },

      async authorize(credentials: any) {
        try {
          await connectToMongoDb()

          const user = await User.findOne({ username: credentials.username })

          if (user && (await compare(credentials.password, user.password))) {
            return {
              id: user._id,
              email: user.email,
              name: user.username,
              image: user.image,
              savedCoins: user.savedCoins,
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
      authorization: {
        params: {
          scope: 'https://www.googleapis.com/auth/userinfo.email',
        },
      },

      profile(profile) {
        return {
          id: profile.email,
          email: profile.email,
          username: profile.name,
          image: profile.picture,
          savedCoins: [],
        }
      }
    }),
  ],

  debug: true,
}
