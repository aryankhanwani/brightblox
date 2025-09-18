'use client'

import { ShieldCheck, Rocket, ArrowRight } from 'lucide-react'
import { PodiaButton } from './PodiaButton'

export default function FinalCTA() {
  return (
    <section className="relative border-t border-white/10 bg-[#0c0c0c] overflow-hidden">
      {/* Subtle Background Effect */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-[#22d3ee]/10 to-[#10b981]/10 blur-3xl"></div>
      
      <div className="relative mx-auto max-w-4xl px-6 py-20">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>
            Ready to Future-Proof Your Career?
          </h3>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Join 200+ professionals who&apos;ve already made the leap into Web3. Your six-figure blockchain career starts here.
          </p>

          {/* Clean CTA Section */}
          <div className="text-center mb-8">
            {/* CTA Button */}
            <PodiaButton 
              variant="course"
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#22d3ee] to-[#10b981] px-8 py-3 text-base font-semibold tracking-tight text-[#0a0a0a] hover:opacity-95 transition-all duration-200"
            >
              <Rocket className="h-4 w-4 text-[#0a0a0a]" aria-hidden="true" />
              Get The Blueprint Now
              <ArrowRight className="h-4 w-4 text-[#0a0a0a] group-hover:translate-x-1 transition-transform" />
            </PodiaButton>
          </div>

          {/* Minimal Stats */}
          <div className="mt-12 flex items-center justify-center gap-8 text-center">
            <div className="text-xl font-semibold text-[#22d3ee]">200+</div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-xl font-semibold text-[#10b981]">$120K+</div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-xl font-semibold text-[#22d3ee]">90 Days</div>
          </div>
        </div>
      </div>
    </section>
  )
}
