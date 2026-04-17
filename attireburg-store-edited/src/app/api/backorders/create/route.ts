import { NextRequest, NextResponse } from 'next/server'
export async function POST(request: NextRequest) {
  const mockId = `backorder-${Date.now()}`
  return NextResponse.json({ success: true, orderId: mockId, message: 'Vorbestellung erfolgreich erstellt' })
}
