import { NextResponse } from 'next/server'
import { sampleCategories } from '@/lib/sampleData'

export async function GET() {
  return NextResponse.json({ categories: sampleCategories })
}
