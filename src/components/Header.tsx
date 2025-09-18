'use client'

import { Zap } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0a0a0a]/70 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3 py-2">
          {/* <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
            <span className="text-xs font-semibold tracking-tight" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>BB</span>
          </div> */}
          {/* <span className="text-sm font-medium text-white/80" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>Brightblox</span>4 */}
          <img src="brightblox.png" alt="Brightblox" className="h-10 w-full" />
        </div>
        <nav className="hidden items-center gap-6 md:flex py-4">
          <a href="#solution" className="text-sm text-white/70 hover:text-white transition-colors">Blueprint</a>
          <a href="#modules" className="text-sm text-white/70 hover:text-white transition-colors">What's Inside</a>
          <a href="#testimonials" className="text-sm text-white/70 hover:text-white transition-colors">Results</a>
          <a href="#faq" className="text-sm text-white/70 hover:text-white transition-colors">FAQ</a>
        </nav>
        <div className="hidden items-center gap-3 md:flex py-4  ">
          <a href="#pricing" className="group inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#22d3ee] to-[#10b981] px-3 py-2 text-xs font-semibold tracking-tight text-[#0a0a0a] hover:opacity-95 active:opacity-90 ring-1 ring-white/10">
            <Zap className="h-4 w-4 text-[#0a0a0a]" aria-hidden="true" />
            Get The Blueprint Now
          </a>
        </div>
        <div className="md:hidden">
          <a href="#pricing" className="rounded-md bg-gradient-to-r from-[#22d3ee] to-[#10b981] px-3 py-2 text-xs font-medium tracking-tight text-[#0a0a0a] ring-1 ring-white/10">Enroll Now</a>
        </div>
      </div>
    </header>
  )
}
