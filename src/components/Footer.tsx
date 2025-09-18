'use client'

import { Twitter, Linkedin, Youtube } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="border-t border-white/10 bg-[#0c0c0c]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <img src="/brightblox.png" alt="Brightblox" className="h-8 sm:h-10 w-auto shrink-0" />
            <div className="hidden sm:block">
              <p className="text-sm font-medium">Brightblox</p>
              <p className="text-xs text-white/60">Web3 Career Training</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="mailto:hello@brightblox.io" className="text-white/70 hover:text-white transition-colors">hello@brightblox.io</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Terms</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="rounded-md border border-white/10 p-2 text-white/70 hover:text-white hover:border-white/30 transition">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-md border border-white/10 p-2 text-white/70 hover:text-white hover:border-white/30 transition">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="YouTube" className="rounded-md border border-white/10 p-2 text-white/70 hover:text-white hover:border-white/30 transition">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-white/50">© {currentYear} Brightblox. All rights reserved.</div>
      </div>
    </footer>
  )
}
