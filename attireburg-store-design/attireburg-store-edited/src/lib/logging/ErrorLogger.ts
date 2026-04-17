// Design-only logger — console only
export const errorLogger = {
  error: (msg: string, ctx?: any, err?: Error) => console.error('[Design]', msg, ctx),
  logDatabaseError: (op: string, model: string, err: Error, ctx?: any) => console.warn('[Design] DB error skipped:', op, model),
  logAPIError: (path: string, method: string, err: Error, ctx?: any) => console.warn('[Design] API error:', method, path),
}
