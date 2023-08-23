import { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

export const getTokenData = (req: NextRequest) => {
  try {
    const encodedToken = req.cookies.get('Token')?.value || ''
    const decodedToken = jwt.verify(encodedToken, process.env.TOKEN_SECRET!)

    return decodedToken

  } catch (error: any) {
      throw new Error(error.message)
  }
}