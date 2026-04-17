import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Always return available in design mode
  return NextResponse.json({ available: true, items: [], unavailableItems: [] })
}
