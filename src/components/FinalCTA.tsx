'use client'

import { ShieldCheck, Rocket } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>Ready to Future-Proof Your Career?</h3>
        <div className="mx-auto mt-3 flex max-w-md items-center justify-center gap-2 text-xs text-white/70">
          <ShieldCheck className="h-4 w-4" />
          30-day money-back guarantee
        </div>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#checkout" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#22d3ee] to-[#10b981] px-5 py-2.5 text-sm font-semibold tracking-tight text-[#0a0a0a] hover:opacity-95 ring-1 ring-white/10">
            <Rocket className="h-4 w-4 text-[#0a0a0a]" aria-hidden="true" />
            Get The Blueprint
          </a>
        </div>
        <p className="mt-3 text-xs text-white/60">Safe checkout • Encrypted payment • Instant access</p>
      </div>
    </section>
  )
}
