'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer className="bg-gray-900 text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">

        {/* Newsletter */}
        <div className="border-b border-gray-700 pb-10 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-base mb-1">Newsletter abonnieren</p>
            <p className="text-gray-400 text-xs">Exklusive Angebote & neue Kollektionen direkt in Ihr Postfach.</p>
          </div>
          {subscribed ? (
            <p className="text-green-400 text-sm font-medium">✓ Danke! Sie sind angemeldet.</p>
          ) : (
            <form
              onSubmit={e => { e.preventDefault(); setSubscribed(true) }}
              className="flex w-full md:w-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 md:w-64 px-4 py-2.5 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400"
              />
              <button type="submit" className="bg-white text-gray-900 px-5 py-2.5 text-sm font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Anmelden
              </button>
            </form>
          )}
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <p className="text-white font-semibold mb-4 tracking-wide">ATTIREBURG</p>
            <p className="text-gray-400 text-xs leading-relaxed">
              Premium deutsche Kleidung. Zeitloses Design trifft auf erstklassige Qualität.
            </p>
          </div>
          <div>
            <p className="text-white font-semibold mb-4">Shop</p>
            <ul className="space-y-2.5">
              <li><Link href="/products" className="hover:text-white transition-colors">Alle Produkte</Link></li>
              <li><Link href="/products?category=pullover" className="hover:text-white transition-colors">Pullover</Link></li>
              <li><Link href="/products?category=jacken" className="hover:text-white transition-colors">Jacken</Link></li>
              <li><Link href="/products?onSale=true" className="hover:text-white transition-colors">Sale</Link></li>
              <li><Link href="/print-on-demand" className="hover:text-white transition-colors">Print on Demand</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-4">Hilfe</p>
            <ul className="space-y-2.5">
              <li><Link href="/contact" className="hover:text-white transition-colors">Kontakt</Link></li>
              <li><Link href="/shipping" className="hover:text-white transition-colors">Versand</Link></li>
              <li><Link href="/returns" className="hover:text-white transition-colors">Rückgabe</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-4">Rechtliches</p>
            <ul className="space-y-2.5">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Datenschutz</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">AGB</Link></li>
              <li><Link href="/imprint" className="hover:text-white transition-colors">Impressum</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">© 2026 Attireburg. Alle Rechte vorbehalten.</p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {/* Visa */}
            <svg className="h-6 w-auto opacity-60" viewBox="0 0 48 16" fill="none">
              <rect width="48" height="16" rx="2" fill="#1A1F71"/>
              <text x="6" y="12" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial">VISA</text>
            </svg>
            {/* Mastercard */}
            <svg className="h-6 w-auto opacity-60" viewBox="0 0 38 24" fill="none">
              <rect width="38" height="24" rx="3" fill="#252525"/>
              <circle cx="15" cy="12" r="7" fill="#EB001B"/>
              <circle cx="23" cy="12" r="7" fill="#F79E1B"/>
              <path d="M19 6.8a7 7 0 010 10.4A7 7 0 0119 6.8z" fill="#FF5F00"/>
            </svg>
            {/* PayPal */}
            <svg className="h-6 w-auto opacity-60" viewBox="0 0 60 16" fill="none">
              <rect width="60" height="16" rx="2" fill="#003087"/>
              <text x="6" y="12" fill="white" fontSize="9" fontWeight="bold" fontFamily="Arial">PayPal</text>
            </svg>
            {/* Apple Pay */}
            <svg className="h-6 w-auto opacity-60" viewBox="0 0 60 16" fill="none">
              <rect width="60" height="16" rx="2" fill="#000"/>
              <text x="5" y="12" fill="white" fontSize="8" fontWeight="bold" fontFamily="Arial">Apple Pay</text>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  )
}
