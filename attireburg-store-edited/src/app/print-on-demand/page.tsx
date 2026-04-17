'use client'
import { useState } from 'react'

type BuyerType = 'individual' | 'business' | null

export default function PrintOnDemand() {
  const [buyerType, setBuyerType] = useState<BuyerType>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    companyName: '',
    email: '',
    description: '',
    designFile: null as File | null,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission delay
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setForm(prev => ({ ...prev, designFile: file }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Wir haben Ihre Anfrage erhalten!</h2>
          <p className="text-gray-600 mb-6">
            Vielen Dank für Ihre Design-Anfrage. Wir werden uns in Kürze bei Ihnen melden.
          </p>
          <p className="text-sm text-gray-500">
            We got your message and will reach out to you shortly.
          </p>
          <button
            onClick={() => { setSubmitted(false); setBuyerType(null); setForm({ name: '', companyName: '', email: '', description: '', designFile: null }) }}
            className="mt-8 text-primary-600 hover:text-primary-700 font-medium text-sm"
          >
            Neue Anfrage stellen
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Print on Demand</h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Erstellen Sie Ihre eigene individuelle Kleidung — für Privatpersonen und Unternehmen.
          </p>
        </div>

        {/* Step 1: Choose buyer type */}
        {!buyerType && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 text-center mb-8">Wer sind Sie?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <button
                onClick={() => setBuyerType('individual')}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl border-2 border-transparent hover:border-primary-500 p-8 text-left transition-all"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-200 transition-colors">
                  <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Privatperson</h3>
                <p className="text-gray-500 text-sm">Individual / Personal Order — für Einzelpersonen, Geschenke oder kleine Mengen.</p>
              </button>

              <button
                onClick={() => setBuyerType('business')}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl border-2 border-transparent hover:border-primary-500 p-8 text-left transition-all"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-200 transition-colors">
                  <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Unternehmen</h3>
                <p className="text-gray-500 text-sm">Business Order — für Firmen, Vereine oder Großbestellungen mit eigenem Branding.</p>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Form */}
        {buyerType && (
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-gray-900">
                {buyerType === 'individual' ? 'Privatperson — Design-Anfrage' : 'Unternehmen — Design-Anfrage'}
              </h2>
              <button onClick={() => setBuyerType(null)} className="text-sm text-gray-500 hover:text-gray-700">
                ← Zurück
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  placeholder="Ihr vollständiger Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {buyerType === 'business' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Firmenname <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.companyName}
                    onChange={e => setForm(p => ({ ...p, companyName: e.target.value }))}
                    placeholder="Name Ihres Unternehmens"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-Mail-Adresse <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  placeholder="ihre@email.de"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Design-Beschreibung <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.description}
                  onChange={e => setForm(p => ({ ...p, description: e.target.value }))}
                  placeholder="Beschreiben Sie Ihr gewünschtes Design, Farben, Texte, Mengen usw."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Design-Datei hochladen
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors">
                  <input
                    type="file"
                    accept="image/*,.pdf,.ai,.eps,.svg"
                    onChange={handleFileChange}
                    className="hidden"
                    id="design-upload"
                  />
                  <label htmlFor="design-upload" className="cursor-pointer">
                    <svg className="w-10 h-10 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {form.designFile ? (
                      <p className="text-primary-600 font-medium">{form.designFile.name}</p>
                    ) : (
                      <>
                        <p className="text-gray-600 font-medium">Klicken zum Hochladen</p>
                        <p className="text-gray-400 text-sm mt-1">PNG, JPG, PDF, SVG, AI, EPS</p>
                      </>
                    )}
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-4 rounded-lg transition-colors"
              >
                {loading ? 'Wird gesendet...' : 'Anfrage absenden'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
