import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import { MongoClient } from 'mongodb'
import { connectToMongoDb } from '@lib/mongodb'
import User from '@models/users'
import { compare } from 'bcrypt'


const clientPromise: Promise<MongoClient> = MongoClient.connect(
  process.env.MONGODB_URI!
)

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),

  pages: {
    signIn: '/pages/signin',
    newUser: '/pages/register',
  },

  session: {
    strategy: 'jwt',
  },

  providers: [
    CredentialsProvider({
      name: ' your Username',
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
          connectToMongoDb()

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
