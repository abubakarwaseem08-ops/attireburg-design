import { NextRequest, NextResponse } from 'next/server'
export async function POST(request: NextRequest) {
  const mockOrderId = `demo-${Date.now()}`
  return NextResponse.json({
    orderId: mockOrderId,
    orderNumber: `ATB-${mockOrderId.slice(-6).toUpperCase()}`,
    status: 'success',
    message: 'Zahlung erfolgreich (Design-Modus)',
  })
}
