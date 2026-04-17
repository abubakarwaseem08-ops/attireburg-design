// DEMO_MODE: Analytics page hidden. Set DEMO_MODE=false in DashboardLayout.tsx to restore sidebar link.
// To fully restore this page, replace this file with the original analytics/page.tsx from attireburg-store-main.
'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AdminAnalytics() {
  const router = useRouter()
  useEffect(() => { router.replace('/admin') }, [router])
  return null
}
