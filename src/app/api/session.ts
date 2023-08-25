import { getServerSession } from 'next-auth'
import { authOptions } from '@lib/auth'
import { NextRequest, NextResponse } from 'next/server'


export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  console.log(req)

  return NextResponse.json({
    authenticated: !!session,
    session,
  })
}
