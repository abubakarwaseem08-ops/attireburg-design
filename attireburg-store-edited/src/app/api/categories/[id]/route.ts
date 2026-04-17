import { NextRequest, NextResponse } from 'next/server'
import { sampleCategories } from '@/lib/sampleData'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const category = sampleCategories.find(c => c.id === params.id || c.slug === params.id)
  if (!category) return NextResponse.json({ error: 'Kategorie nicht gefunden' }, { status: 404 })
  return NextResponse.json({ category })
}
