import { type NextRequest, NextResponse } from 'next/server'
export const runtime = 'edge';


export async function GET(request: NextRequest) {
  const redirectTo = request.nextUrl.clone()
  redirectTo.pathname = '/error'
  return NextResponse.redirect(redirectTo)
}