'use client'

import { Award, BadgeCheck, Share2, Printer, Zap, ScanLine } from 'lucide-react'

export default function Certification() {
  return (
    <section id="certification" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Award className="h-4 w-4" />
              Official Certificate
            </div>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>Get Certified</h3>
            <p className="mt-2 text-white/70">Complete the Blueprint and receive a shareable digital certificate to showcase on your LinkedIn, resume, and portfolio.</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li className="flex items-start gap-2"><BadgeCheck className="h-4 w-4 text-[#00d4ff] mt-0.5" /> Unique certificate ID for verification</li>
              <li className="flex items-start gap-2"><Share2 className="h-4 w-4 text-[#00d4ff] mt-0.5" /> One-click share to LinkedIn</li>
              <li className="flex items-start gap-2"><Printer className="h-4 w-4 text-[#00d4ff] mt-0.5" /> Printable high-res PDF</li>
            </ul>
            <div className="mt-6">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#22d3ee] to-[#10b981] px-4 py-2 text-sm font-semibold tracking-tight text-[#0a0a0a] hover:opacity-95 ring-1 ring-white/10">
                <Zap className="h-4 w-4 text-[#0a0a0a]" />
                Earn Your Certificate
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#22d3ee]/30 to-[#10b981]/30 blur-xl"></div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] p-4">
              <img
                alt="Brightblox Certificate"
                className="mx-auto w-full max-w-[640px] rounded-lg border border-white/10 bg-white"
                src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1000' height='700' viewBox='0 0 1000 700'><rect x='0' y='0' width='1000' height='700' fill='white'/><rect x='20' y='20' width='960' height='660' fill='none' stroke='rgb(34,211,238)' stroke-width='4' stroke-dasharray='8,8'/><text x='500' y='140' font-size='36' text-anchor='middle' fill='black' font-family='Poppins, Inter, Arial'>Certificate of Completion</text><text x='500' y='220' font-size='22' text-anchor='middle' fill='rgb(75,85,99)' font-family='Inter, Arial'>This certifies that</text><text x='500' y='300' font-size='32' text-anchor='middle' fill='black' font-family='Poppins, Inter, Arial' font-weight='600'>[Your Name]</text><text x='500' y='360' font-size='18' text-anchor='middle' fill='rgb(75,85,99)' font-family='Inter, Arial'>has successfully completed</text><text x='500' y='410' font-size='22' text-anchor='middle' fill='black' font-family='Poppins, Inter, Arial'>The Web3 Career Blueprint</text><line x1='140' y1='520' x2='360' y2='520' stroke='black' stroke-width='2'/><text x='250' y='550' font-size='14' text-anchor='middle' fill='rgb(75,85,99)' font-family='Inter, Arial'>Instructor</text><line x1='640' y1='520' x2='860' y2='520' stroke='black' stroke-width='2'/><text x='750' y='550' font-size='14' text-anchor='middle' fill='rgb(75,85,99)' font-family='Inter, Arial'>Director</text></svg>"
              />
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-white/60">
                <ScanLine className="h-4 w-4" />
                Watermarked • Verifiable ID
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
