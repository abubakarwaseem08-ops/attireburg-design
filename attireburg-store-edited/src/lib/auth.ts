// Design-only auth — no database, no bcrypt
export interface AuthUser {
  id: string
  email: string
  name: string
  firstName?: string
  lastName?: string
  isAdmin: boolean
}

// Demo users for design testing
const DEMO_USERS: (AuthUser & { password: string })[] = [
  { id: 'demo-user-1', email: 'demo@attireburg.de', name: 'Demo User', firstName: 'Demo', lastName: 'User', password: 'demo123', isAdmin: false },
  { id: 'demo-admin-1', email: 'admin@attireburg.de', name: 'Admin User', firstName: 'Admin', lastName: 'User', password: 'admin123', isAdmin: true },
]

export async function hashPassword(password: string): Promise<string> {
  return password // no hashing in design mode
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return password === hashedPassword
}

export function generateToken(user: AuthUser): string {
  // Simple base64 token — no JWT needed for design
  return Buffer.from(JSON.stringify({ id: user.id, email: user.email, name: user.name, isAdmin: user.isAdmin })).toString('base64')
}

export function verifyToken(token: string): AuthUser | null {
  try {
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString('utf-8'))
    if (decoded?.id && decoded?.email) return decoded as AuthUser
    return null
  } catch {
    return null
  }
}

export async function authenticateUser(email: string, password: string): Promise<AuthUser | null> {
  const user = DEMO_USERS.find(u => u.email === email.toLowerCase() && u.password === password)
  if (!user) return null
  const { password: _, ...authUser } = user
  return authUser
}
