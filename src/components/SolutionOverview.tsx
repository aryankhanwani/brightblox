'use client'

import { Check, Database, FileBadge, Mic, Users, Zap } from 'lucide-react'

export default function SolutionOverview() {
  return (
    <section id="solution" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>Introducing: The Web3 Career Blueprint</h2>
            <p className="mt-3 text-base text-white/70">The complete, non-technical roadmap to landing your first Web3 role—without learning to code.</p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 text-[#00d4ff]" aria-hidden="true" />
                <p className="text-sm">Step-by-step career transition roadmap</p>
              </div>
              <div className="flex items-start gap-3">
                <Database className="mt-0.5 h-5 w-5 text-[#00d4ff]" aria-hidden="true" />
                <p className="text-sm">Curated database of 500+ Web3 companies and contacts</p>
              </div>
              <div className="flex items-start gap-3">
                <FileBadge className="mt-0.5 h-5 w-5 text-[#00d4ff]" aria-hidden="true" />
                <p className="text-sm">Resume & portfolio templates that get interviews</p>
              </div>
              <div className="flex items-start gap-3">
                <Mic className="mt-0.5 h-5 w-5 text-[#00d4ff]" aria-hidden="true" />
                <p className="text-sm">Live Q&A sessions with industry insiders</p>
              </div>
              <div className="flex items-start gap-3">
                <Users className="mt-0.5 h-5 w-5 text-[#00d4ff]" aria-hidden="true" />
                <p className="text-sm">Private community of Web3 career changers</p>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#22d3ee] to-[#10b981] px-4 py-2 text-sm font-semibold tracking-tight text-[#0a0a0a] hover:opacity-95 ring-1 ring-white/10">
                <Zap className="h-4 w-4 text-[#0a0a0a]" aria-hidden="true" />
                Get The Blueprint Now
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-[#101010] p-5">
                <p className="text-xs uppercase tracking-wide text-white/60">Outcomes</p>
                <p className="mt-2 text-sm text-white/80">Target interviews in 3–6 weeks • Offers in ~90 days</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#101010] p-5">
                <p className="text-xs uppercase tracking-wide text-white/60">Workload</p>
                <p className="mt-2 text-sm text-white/80">3–5 hrs/week • Templates + scripts included</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#101010] p-5">
                <p className="text-xs uppercase tracking-wide text-white/60">Roles we place</p>
                <p className="mt-2 text-sm text-white/80">PM, Ops, Community, Growth, Partnerships</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#101010] p-5">
                <p className="text-xs uppercase tracking-wide text-white/60">Average comp</p>
                <p className="mt-2 text-sm text-white/80">$95k–$160k + tokens (varies by market)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
