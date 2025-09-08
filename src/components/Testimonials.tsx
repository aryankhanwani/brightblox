'use client'

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>Real Results From Real People</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop" className="h-10 w-10 rounded-full object-cover" alt="Alisha" />
              <div>
                <p className="text-sm font-medium">Alisha K.</p>
                <p className="text-xs text-white/60">Ex-Brand Designer → Web3 Product Designer</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/80">"Landed $120k role at a major DeFi protocol in 11 weeks. The portfolio template and outreach scripts were game-changers."</p>
          </article>

          <article className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop" className="h-10 w-10 rounded-full object-cover" alt="Miguel" />
              <div>
                <p className="text-sm font-medium">Miguel S.</p>
                <p className="text-xs text-white/60">Web2 PM → DAO Ops Lead</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/80">"First three interviews within 3 weeks. Database access + networking playbook did the heavy lifting."</p>
          </article>

          <article className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" className="h-10 w-10 rounded-full object-cover" alt="Priya" />
              <div>
                <p className="text-sm font-medium">Priya N.</p>
                <p className="text-xs text-white/60">Growth Marketer → Web3 Growth Manager</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/80">"Closed $135k + tokens. The negotiation module alone paid for the program many times over."</p>
          </article>

          <article className="rounded-xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-3">
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" className="h-10 w-10 rounded-full object-cover" alt="Jordan" />
              <div>
                <p className="text-sm font-medium">Jordan T.</p>
                <p className="text-xs text-white/60">Community Manager → Partnerships (L2)</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/80">"Templates + weekly Q&A made it practical. I finally knew what to say, who to message, and how to present my value."</p>
          </article>
        </div>
      </div>
    </section>
  )
}
