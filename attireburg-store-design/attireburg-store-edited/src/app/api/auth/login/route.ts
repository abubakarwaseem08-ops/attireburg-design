import { NextRequest, NextResponse } from 'next/server'
import { authenticateUser, generateToken } from '@/lib/auth'

export async function POST(request: NextRequest) {
  const { email, password } = await request.json()
  if (!email || !password) return NextResponse.json({ error: 'Email und Passwort sind erforderlich' }, { status: 400 })

  const user = await authenticateUser(email, password)
  if (!user) return NextResponse.json({ error: 'Ungültige Anmeldedaten. Versuchen Sie: demo@attireburg.de / demo123' }, { status: 401 })

  return NextResponse.json({ user, token: generateToken(user), message: 'Erfolgreich angemeldet' })
}
