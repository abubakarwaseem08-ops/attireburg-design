// Design-only stub
export class BackorderService {
  constructor(prisma?: any) {}
  async createBackorder(data: any) { return { success: true, orderId: `backorder-${Date.now()}`, message: 'Vorbestellung erstellt' } }
  async fulfillBackorder(id: string) { return { success: true } }
  async cancelBackorder(id: string) { return { success: true } }
}
