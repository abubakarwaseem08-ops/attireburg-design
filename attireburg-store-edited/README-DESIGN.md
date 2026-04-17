# Attireburg Store — Design-Only Version

This is a **design-only** version with all database dependencies removed. Perfect for showcasing the UI/UX without needing PostgreSQL, Prisma, or any backend setup.

## What's Changed

✅ **Red/Crimson Theme** — Updated from brown to vibrant red  
✅ **Print on Demand** — New page at `/print-on-demand` with Individual/Business flow  
✅ **Slim/Loose Fit Selector** — Product pages now have fit options with size chart popups  
✅ **Cart Fixes** — Stock check failures no longer block adding items  
✅ **No Database** — All data is mocked in-memory using sample data  

## Quick Start

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

## Demo Accounts

- **User**: `demo@attireburg.de` / `demo123`
- **Admin**: `admin@attireburg.de` / `admin123`

## Features Working

- ✅ Browse products (8 sample products)
- ✅ Add to cart
- ✅ Checkout flow (mock orders)
- ✅ Login/Register (in-memory auth)
- ✅ Wishlist
- ✅ Print on Demand form
- ✅ Slim/Loose fit selector with size charts
- ✅ All UI/UX features

## What's Mocked

- All API routes return mock data
- No actual database writes
- Orders stored in-memory (lost on restart)
- Auth uses simple base64 tokens (no JWT)
- Inventory always shows "available"

## Original Version

The original database-connected version is in `../attireburg-store-main` — untouched.
