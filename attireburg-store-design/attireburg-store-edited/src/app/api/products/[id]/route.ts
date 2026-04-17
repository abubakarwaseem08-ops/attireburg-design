import { NextRequest, NextResponse } from 'next/server'
import { sampleProducts, sampleReviews } from '@/lib/sampleData'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const product = sampleProducts.find(p => p.id === params.id)
  if (!product) return NextResponse.json({ error: 'Produkt nicht gefunden' }, { status: 404 })

  const reviews = sampleReviews.filter(r => r.productId === params.id)
  return NextResponse.json({ ...product, reviews })
}

export async function PUT(request: NextRequest) {
  return NextResponse.json({ error: 'Nicht verfügbar im Design-Modus' }, { status: 503 })
}

export async function DELETE(request: NextRequest) {
  return NextResponse.json({ error: 'Nicht verfügbar im Design-Modus' }, { status: 503 })
}
