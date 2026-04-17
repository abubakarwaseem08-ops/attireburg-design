import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'

const wishlistStore: Record<string, string[]> = {}

export async function GET(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '')
  const user = token ? verifyToken(token) : null
  if (!user) return NextResponse.json({ error: 'Nicht autorisiert' }, { status: 401 })
  const ids = wishlistStore[user.id] || []
  return NextResponse.json({ wishlist: ids.map(productId => ({ productId })) })
}

export async function POST(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '')
  const user = token ? verifyToken(token) : null
  if (!user) return NextResponse.json({ error: 'Nicht autorisiert' }, { status: 401 })
  const { productId } = await request.json()
  if (!wishlistStore[user.id]) wishlistStore[user.id] = []
  if (!wishlistStore[user.id].includes(productId)) wishlistStore[user.id].push(productId)
  return NextResponse.json({ success: true })
}

export async function DELETE(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '')
  const user = token ? verifyToken(token) : null
  if (!user) return NextResponse.json({ error: 'Nicht autorisiert' }, { status: 401 })
  const { searchParams } = new URL(request.url)
  const productId = searchParams.get('productId')
  if (wishlistStore[user.id]) wishlistStore[user.id] = wishlistStore[user.id].filter(id => id !== productId)
  return NextResponse.json({ success: true })
}
