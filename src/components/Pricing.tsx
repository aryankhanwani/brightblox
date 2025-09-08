'use client'

import { BadgeCheck, Check, ShieldCheck } from 'lucide-react'

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>Founding Members Pricing Ends Soon</h3>
            <p className="mt-2 text-sm sm:text-base text-white/70">Lock in the introductory rate. Limited cohorts ensure personal support.</p>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-4">
              <div className="flex items-baseline gap-2 sm:gap-3">
                <span className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>$500</span>
                <span className="text-white/50 line-through text-lg sm:text-xl">$850</span>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 w-fit">Founding members</span>
            </div>

            {/* Countdown (visual placeholder) */}
            <div className="mt-4 sm:mt-6">
              <p className="text-xs uppercase tracking-wide text-white/60">Offer ends in</p>
              <div className="mt-2 flex flex-wrap gap-2 sm:gap-3">
                <div className="flex-1 min-w-[60px] sm:w-16 lg:w-20 rounded-lg border border-white/10 bg-[#101010] p-2 sm:p-3 text-center">
                  <div className="text-lg sm:text-xl font-semibold tracking-tight" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>02</div>
                  <div className="text-[10px] uppercase text-white/50">Days</div>
                </div>
                <div className="flex-1 min-w-[60px] sm:w-16 lg:w-20 rounded-lg border border-white/10 bg-[#101010] p-2 sm:p-3 text-center">
                  <div className="text-lg sm:text-xl font-semibold tracking-tight" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>14</div>
                  <div className="text-[10px] uppercase text-white/50">Hours</div>
                </div>
                <div className="flex-1 min-w-[60px] sm:w-16 lg:w-20 rounded-lg border border-white/10 bg-[#101010] p-2 sm:p-3 text-center">
                  <div className="text-lg sm:text-xl font-semibold tracking-tight" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>37</div>
                  <div className="text-[10px] uppercase text-white/50">Mins</div>
                </div>
                <div className="flex-1 min-w-[60px] sm:w-16 lg:w-20 rounded-lg border border-white/10 bg-[#101010] p-2 sm:p-3 text-center">
                  <div className="text-lg sm:text-xl font-semibold tracking-tight" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>22</div>
                  <div className="text-[10px] uppercase text-white/50">Secs</div>
                </div>
              </div>
            </div>

            {/* Spots remaining */}
            <div className="mt-4 sm:mt-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 text-xs text-white/60">
                <p>Only 50 founding member spots remaining</p>
                <p>34 claimed</p>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                <div className="h-2 w-[68%] rounded-full bg-gradient-to-r from-[#22d3ee] to-[#10b981]"></div>
              </div>
            </div>
          </div>

          <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">The Web3 Career Blueprint</p>
              <BadgeCheck className="h-5 w-5 text-[#00d4ff]" aria-hidden="true" />
            </div>
            <ul className="mt-4 space-y-2 sm:space-y-3 text-xs sm:text-sm text-white/80">
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-3 w-3 sm:h-4 sm:w-4 text-[#00d4ff] flex-shrink-0" /> <span className="leading-relaxed">Lifetime access + updates</span></li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-3 w-3 sm:h-4 sm:w-4 text-[#00d4ff] flex-shrink-0" /> <span className="leading-relaxed">500+ company database</span></li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-3 w-3 sm:h-4 sm:w-4 text-[#00d4ff] flex-shrink-0" /> <span className="leading-relaxed">Templates, scripts, and portfolio kit</span></li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-3 w-3 sm:h-4 sm:w-4 text-[#00d4ff] flex-shrink-0" /> <span className="leading-relaxed">Weekly live Q&A</span></li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-3 w-3 sm:h-4 sm:w-4 text-[#00d4ff] flex-shrink-0" /> <span className="leading-relaxed">Private community access</span></li>
            </ul>
            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
              <a href="#checkout" className="block w-full rounded-lg bg-gradient-to-r from-[#22d3ee] to-[#10b981] px-3 sm:px-4 py-2 sm:py-2.5 text-center text-xs sm:text-sm font-semibold tracking-tight text-[#0a0a0a] hover:opacity-95 ring-1 ring-white/10">Get The Blueprint</a>
              <div className="flex items-center justify-center gap-2 text-xs text-white/60">
                <ShieldCheck className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="text-center">30-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
