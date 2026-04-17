import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'

// In-memory order store for design demo
const mockOrders: any[] = []

export async function GET(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '')
  if (!token) return NextResponse.json({ error: 'Authentifizierung erforderlich' }, { status: 401 })
  const user = verifyToken(token)
  if (!user) return NextResponse.json({ error: 'Ungültiger Token' }, { status: 401 })

  const orders = mockOrders.filter(o => o.userId === user.id)
  return NextResponse.json({ orders })
}

export async function POST(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '')
  if (!token) return NextResponse.json({ error: 'Authentifizierung erforderlich' }, { status: 401 })
  const user = verifyToken(token)
  if (!user) return NextResponse.json({ error: 'Ungültiger Token' }, { status: 401 })

  const body = await request.json()
  const mockOrderId = `demo-${Date.now()}`

  mockOrders.push({
    id: mockOrderId,
    userId: user.id,
    status: 'PENDING',
    totalAmount: body.totalAmount,
    items: body.items || [],
    shippingAddress: body.shippingAddress,
    createdAt: new Date().toISOString(),
  })

  return NextResponse.json({
    orderId: mockOrderId,
    orderNumber: `ATB-${mockOrderId.slice(-6).toUpperCase()}`,
    status: 'success',
    message: 'Bestellung erfolgreich aufgegeben',
  })
}
