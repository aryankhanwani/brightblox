'use client'

import { ShieldCheck, Rocket, Lock } from 'lucide-react'
import { PodiaButton } from './PodiaButton'

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            30-day money-back guarantee
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>
            Break Into Web3 Without Coding: From Stuck to Six-Figure Blockchain Career
          </h1>
          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            The proven blueprint that helped 200+ non-technical professionals land high-paying Web3 roles in 90 days.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <PodiaButton 
              variant="course"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#22d3ee] to-[#10b981] px-4 py-2.5 text-sm font-semibold tracking-tight text-[#0a0a0a] hover:opacity-95 active:opacity-90 ring-1 ring-white/10"
            >
              <Rocket className="h-5 w-5 text-[#0a0a0a]" aria-hidden="true" />
              Get The Blueprint Now
            </PodiaButton>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop" alt="Member" className="h-8 w-8 rounded-full ring-2 ring-[#0a0a0a] object-cover" />
              <img src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=200&auto=format&fit=crop" alt="Member" className="h-8 w-8 rounded-full ring-2 ring-[#0a0a0a] object-cover" />
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="Member" className="h-8 w-8 rounded-full ring-2 ring-[#0a0a0a] object-cover" />
              <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="Member" className="h-8 w-8 rounded-full ring-2 ring-[#0a0a0a] object-cover" />
            </div>
            <p className="text-sm text-white/70">Join 200+ professionals already inside</p>
          </div>
          <div className="mt-3 flex items-center gap-3 text-xs text-white/60">
            <Lock className="h-4 w-4" aria-hidden="true" />
            Secure checkout • Encrypted payment
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#22d3ee]/30 to-[#10b981]/30 blur-xl"></div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] p-2">
            <img src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" alt="Instructor headshot" className="h-[420px] w-full object-cover rounded-xl" />
            <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/10 bg-black/40 p-4 backdrop-blur">
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="Instructor" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" />
                <div>
                  <p className="text-sm font-medium" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>Alex Park</p>
                  <p className="text-xs text-white/70">Ex-Web2 PM → Head of Ops at top DeFi protocol</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-white/70">Built teams across DeFi, NFTs, and L2s. Hiring manager insights baked in.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
