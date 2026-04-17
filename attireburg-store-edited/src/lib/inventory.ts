// Design-only inventory — always returns available
export const inventoryService = {
  checkStock: async (items: any[]) => items.map(i => ({ ...i, available: true, currentStock: 999 })),
  reserveInventory: async (items: any[]) => ({ success: true, errors: [] }),
  releaseInventory: async (items: any[]) => ({ success: true }),
}
