import { NextRequest, NextResponse } from 'next/server'
export async function POST(request: NextRequest) {
  return NextResponse.json({ id: `PAYPAL-DEMO-${Date.now()}`, status: 'CREATED' })
}
