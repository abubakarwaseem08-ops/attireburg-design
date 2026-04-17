import { NextResponse } from 'next/server'
export async function GET() {
  return NextResponse.json({ status: 'design-mode', database: 'not connected' })
}
