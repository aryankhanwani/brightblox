'use client'

import { Check, ClipboardList } from 'lucide-react'
import { PodiaButton } from './PodiaButton'

export default function LeadMagnet() {
  return (
    <section id="lead-magnet" className="border-t border-white/10 bg-[#0c0c0c]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gradient-to-br from-[#22d3ee]/20 to-[#10b981]/20 blur-2xl"></div>
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>Start Your Web3 Journey Today - FREE</h3>
            <p className="mt-2 text-white/70">Get our exclusive "Web3 Career Readiness Checklist" — the exact 27-point checklist I use to evaluate if someone is ready to land their first Web3 role.</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 text-[#00d4ff]" aria-hidden="true" />
              <p className="text-sm">Identify your transferable Web2 skills for Web3</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 text-[#00d4ff]" aria-hidden="true" />
              <p className="text-sm">15 must-know Web3 terms that'll make you sound like an insider</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 text-[#00d4ff]" aria-hidden="true" />
              <p className="text-sm">The 5 highest-paying non-technical Web3 roles right now</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 text-[#00d4ff]" aria-hidden="true" />
              <p className="text-sm">Salary benchmarks for each role by experience level</p>
            </div>
          </div>

          <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <input 
                type="email" 
                required 
                placeholder="Your email address" 
                className="w-full rounded-lg border border-white/15 bg-[#0f0f0f] px-4 py-3 text-sm placeholder-white/40 outline-none focus:border-white/30" 
                id="lead-magnet-email"
              />
              <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-white/10"></div>
            </div>
            <PodiaButton 
              variant="leadMagnet"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#22d3ee] to-[#10b981] px-5 py-2.5 text-sm font-semibold tracking-tight text-[#0a0a0a] hover:opacity-95 active:opacity-90 ring-1 ring-white/10"
            >
              <ClipboardList className="h-4 w-4 text-[#0a0a0a]" aria-hidden="true" />
              Get Free Checklist
            </PodiaButton>
          </div>
          <p className="mt-3 text-xs text-white/60">Join 1,200+ professionals who've downloaded this guide</p>
        </div>
      </div>
    </section>
  )
}
