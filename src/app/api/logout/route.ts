import { NextResponse } from "next/server"

export async function GET() {
  try {
    const res = NextResponse.json({
      message: 'Log Out SUCCESSFUL',
      success: true
    })

    res.cookies.set(
      'Token', 
      '', 
      {httpOnly: true}
    )

    return res

  } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
