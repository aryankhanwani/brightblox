'use client'

import { Map, Compass, Database, MessageSquare, Wallet, Sparkles, Check, Wand2, FileText, Presentation, ListChecks, MessageSquare as MessageSquareIcon, Contact, FileCheck, Mic, Quote, Scale, Shield, Handshake, Slack, Calendar, FileCheck as FileCheckIcon, Trophy, MousePointer, Clock, Users, Target, ArrowRight } from 'lucide-react'

export default function CourseBreakdown() {
  const modules = [
    {
      id: 1,
      icon: Map,
      title: "Web3 Landscape & Opportunities",
      duration: "2-3 hours",
      description: "Cut through noise with a clear mental model of L1s/L2s, DeFi, NFTs, and infrastructure. Learn how value flows, which teams are hiring, and where non-technical roles drive impact.",
      outcomes: [
        "Complete market map: protocols, tooling, products",
        "Understand team structures: PM, Growth, Ops, Community",
        "Identify signal vs. noise to prioritize learning",
        "Map your target companies and roles"
      ],
      deliverables: [
        "Web3 ecosystem mind map",
        "Target company research spreadsheet",
        "Role prioritization framework"
      ]
    },
    {
      id: 2,
      icon: Compass,
      title: "Skill Translation & Positioning",
      duration: "3-4 hours",
      description: "Translate Web2 experience into Web3 credibility. Build a sharp value proposition and proof-of-work assets that speak a hiring manager's language.",
      outcomes: [
        "Craft your 'Why Web3, Why Now' narrative",
        "Optimize resume + LinkedIn for crypto roles",
        "Build mini-portfolio with teardown or growth plan",
        "Develop personal brand positioning"
      ],
      deliverables: [
        "Web3-optimized resume template",
        "LinkedIn profile makeover guide",
        "Portfolio project outline"
      ]
    },
    {
      id: 3,
      icon: Database,
      title: "The Network Advantage Database",
      duration: "2-3 hours",
      description: "Access 500+ companies, recruiters, and warm intros. Execute targeted outreach with scripts calibrated to the crypto hiring loop.",
      outcomes: [
        "Prioritized target list + email/Twitter scripts",
        "DM frameworks that earn replies",
        "Warm referrals from the community",
        "Outreach tracking system"
      ],
      deliverables: [
        "Company database with 500+ entries",
        "Email and DM script templates",
        "Outreach tracking spreadsheet"
      ]
    },
    {
      id: 4,
      icon: MessageSquare,
      title: "Application & Interview Mastery",
      duration: "4-5 hours",
      description: "Ship applications that stand out. Practice crypto-specific interview loops and tell stories that prove you can deliver outcomes.",
      outcomes: [
        "ATS-proof resume templates",
        "Mock interviews + portfolio critiques",
        "Story frameworks (SOAR/STAR for Web3)",
        "Interview preparation checklist"
      ],
      deliverables: [
        "Interview preparation workbook",
        "Story framework templates",
        "Portfolio presentation guide"
      ]
    },
    {
      id: 5,
      icon: Wallet,
      title: "Salary Negotiation in Crypto",
      duration: "2-3 hours",
      description: "Negotiate comp with confidence: base, tokens, cliffs, vesting, and variable elements. Learn how to evaluate offers across cycles.",
      outcomes: [
        "Token math: equity vs. grants",
        "Risk-adjusted decision checklist",
        "Templates for counteroffers",
        "Compensation benchmarking"
      ],
      deliverables: [
        "Token valuation calculator",
        "Negotiation script templates",
        "Offer evaluation framework"
      ]
    },
    {
      id: 6,
      icon: Sparkles,
      title: "Bonus Materials & Community",
      duration: "Lifetime",
      description: "Exclusive access to our private community, ongoing support, and additional resources to accelerate your Web3 career journey.",
      outcomes: [
        "Private Slack community access",
        "Monthly industry updates",
        "Resume review sessions",
        "Exclusive hiring partner intros"
      ],
      deliverables: [
        "Community access and guidelines",
        "Monthly update templates",
        "Partner introduction protocols"
      ]
    }
  ]

  return (
    <section id="modules" className="relative border-t border-white/10 bg-[#0c0c0c] overflow-hidden" >
      <div id="modules-parallax" className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-[#22d3ee]/20 to-[#10b981]/20 blur-3xl will-change-transform"></div>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>
            Everything You Need to Break Into Web3
          </h3>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            A practical, outcome-first curriculum with clear milestones, portfolio proof, and targeted outreach so you move from learning to landing.
          </p>
        </div>

        <div className="space-y-8">
          {modules.map((module, index) => {
            const IconComponent = module.icon
            return (
              <div 
                key={module.id}
                data-reveal 
                data-reveal-delay={`${index * 100}ms`} 
                className="opacity-0 translate-y-8 transition duration-1000 ease-out will-change-transform"
              >
                <div className="relative">
                  {/* Module Header */}
                  <div className="relative overflow-hidden rounded-t-2xl border border-white/10 bg-gradient-to-r from-[#22d3ee]/10 to-[#10b981]/10 p-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#22d3ee]/5 to-[#10b981]/5"></div>
                    <div className="relative flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-sm font-medium text-[#22d3ee]">MODULE {module.id}</span>
                          <div className="w-8 h-px bg-gradient-to-r from-[#22d3ee] to-[#10b981]"></div>
                        </div>
                        <h4 className="text-2xl font-semibold" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>
                          {module.title}
                        </h4>
                      </div>
                      <div className="hidden md:flex flex-col items-end">
                        <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Duration</div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#10b981]"></div>
                          <span className="text-sm font-semibold text-white/90">{module.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Module Content */}
                  <div className="rounded-b-2xl border-x border-b border-white/10 bg-white/[0.03] p-8 min-h-[300px]">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Description */}
                      <div>
                        <h5 className="text-lg font-medium mb-4 text-white/90">What You'll Learn</h5>
                        <p className="text-white/70 leading-relaxed mb-6">
                          {module.description}
                        </p>
                        
                        <div className="space-y-4">
                          <h6 className="font-medium text-white/90 flex items-center gap-2">
                            <Users className="h-4 w-4 text-[#22d3ee]" />
                            Key Outcomes
                          </h6>
                          <ul className="space-y-3">
                            {module.outcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <Check className="h-4 w-4 text-[#22d3ee] mt-1 flex-shrink-0" />
                                <span className="text-sm text-white/70">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <h6 className="font-medium text-white/90 mb-4 flex items-center gap-2">
                          <FileText className="h-4 w-4 text-[#10b981]" />
                          What You'll Get
                        </h6>
                        <div className="space-y-3">
                          {module.deliverables.map((deliverable, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#10b981]"></div>
                              <span className="text-sm text-white/70">{deliverable}</span>
                            </div>
                          ))}
                        </div>

                        {module.id === 6 && (
                          <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-[#22d3ee]/10 to-[#10b981]/10 border border-white/10">
                            <div className="flex items-center gap-2 mb-2">
                              <Sparkles className="h-4 w-4 text-[#22d3ee]" />
                              <span className="text-sm font-medium text-white/90">Lifetime Access</span>
                            </div>
                            <p className="text-xs text-white/60">
                              All materials, community access, and updates included forever.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-3 text-sm text-white/60">
            <MousePointer className="h-4 w-4" />
            <span>Modules reveal as you scroll • Each designed for maximum impact</span>
          </div>
        </div>
      </div>
    </section>
  )
}
