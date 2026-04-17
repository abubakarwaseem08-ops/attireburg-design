import { NextResponse } from 'next/server'
export async function GET() {
  return NextResponse.json({
    totalOrders: 142, totalRevenue: 18450.50, totalUsers: 89, totalProducts: 8,
    recentOrders: [], topProducts: []
  })
}
