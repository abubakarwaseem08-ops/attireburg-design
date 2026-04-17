import { NextRequest, NextResponse } from 'next/server'
import { generateToken } from '@/lib/auth'
import type { AuthUser } from '@/lib/auth'

export async function POST(request: NextRequest) {
  const { email, password, name, firstName, lastName } = await request.json()
  if (!email || !password || !name) return NextResponse.json({ error: 'Email, Passwort und Name sind erforderlich' }, { status: 400 })

  const user: AuthUser = { id: `user-${Date.now()}`, email: email.toLowerCase(), name, firstName, lastName, isAdmin: false }
  return NextResponse.json({ user, token: generateToken(user), message: 'Konto erfolgreich erstellt' }, { status: 201 })
}
