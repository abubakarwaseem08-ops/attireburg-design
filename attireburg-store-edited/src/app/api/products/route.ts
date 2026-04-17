import { NextRequest, NextResponse } from 'next/server'
import { sampleProducts } from '@/lib/sampleData'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '12')
  const category = searchParams.get('category')
  const search = searchParams.get('search')
  const featured = searchParams.get('featured')
  const onSale = searchParams.get('onSale')

  let products = sampleProducts.filter(p => {
    if (category && p.category !== category) return false
    if (featured === 'true' && !p.featured) return false
    if (onSale === 'true' && !p.onSale) return false
    if (search) {
      const s = search.toLowerCase()
      return p.name.toLowerCase().includes(s) || p.nameEn.toLowerCase().includes(s)
    }
    return true
  })

  const total = products.length
  const skip = (page - 1) * limit
  products = products.slice(skip, skip + limit)

  return NextResponse.json({ products, pagination: { page, limit, total, pages: Math.ceil(total / limit) } })
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ error: 'Nicht verfügbar im Design-Modus' }, { status: 503 })
}
