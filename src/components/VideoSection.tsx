'use client'

import { PlayCircle, Clock, ShieldCheck } from 'lucide-react'

export default function VideoSection() {
  return (
    <section id="video" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <PlayCircle className="h-4 w-4" />
            Watch: How the Blueprint Works
          </div>
          <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>A 3-minute walkthrough of your path to Web3</h3>
          <p className="mt-2 text-white/70">See the core phases, what to expect week-by-week, and how members land interviews fast.</p>
          <div className="mt-6 relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#22d3ee]/30 to-[#10b981]/30 blur-xl"></div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] p-2">
              <div className="rounded-xl overflow-hidden">
                <video className="w-full h-full rounded-xl aspect-video bg-black" controls playsInline preload="metadata" poster="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80">
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <Clock className="h-4 w-4" />
                  3:00 min
                </div>
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <ShieldCheck className="h-4 w-4" />
                  No fluff — just the plan
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
