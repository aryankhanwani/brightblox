'use client'

import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-white/10 bg-[#0c0c0c]">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-center" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>Frequently Asked Questions</h3>
        <div className="mt-8 space-y-3">
          <details className="group rounded-lg border border-white/10 bg-white/[0.03] p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
              I have no technical background — will this work for me?
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm text-white/70">Yes. The program is designed for non-technical pros (PMs, marketers, designers, ops). You'll get positioning, templates, and a step-by-step plan to showcase value without code.</p>
          </details>
          <details className="group rounded-lg border border-white/10 bg-white/[0.03] p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
              How long does it take to see results?
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm text-white/70">Most members see interviews within 3–6 weeks and offers in ~90 days, depending on execution and market timing.</p>
          </details>
          <details className="group rounded-lg border border-white/10 bg-white/[0.03] p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
              What if I don't get hired?
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm text-white/70">We offer a 30-day money-back guarantee. If you complete the action steps and don't see traction, we'll make it right—refund or extended support.</p>
          </details>
          <details className="group rounded-lg border border-white/10 bg-white/[0.03] p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
              Is the Web3 market just a bubble?
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm text-white/70">Cycles come and go, but talent is always in demand. We focus on durable skills, infrastructure roles, and product-market-fit teams to reduce risk.</p>
          </details>
          <details className="group rounded-lg border border-white/10 bg-white/[0.03] p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
              What kind of support do I get?
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm text-white/70">Weekly live Q&A, resume reviews, and a private community. You'll never be stuck without feedback.</p>
          </details>
        </div>
      </div>
    </section>
  )
}
