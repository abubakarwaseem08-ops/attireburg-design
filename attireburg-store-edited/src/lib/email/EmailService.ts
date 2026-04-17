// Design-only email service — no-op
export const emailService = {
  sendOrderConfirmation: async (data: any) => { console.log('[Design] Order confirmation email:', data.orderNumber) },
  sendRestockNotification: async (data: any) => {},
  sendWaitlistConfirmation: async (data: any) => {},
}
