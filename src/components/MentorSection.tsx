'use client'

import { Youtube, Instagram, Linkedin, Award } from 'lucide-react'

export default function MentorSection() {
  return (
    <section className="border-t border-white/10 bg-[#0c0c0c]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Section - Image and Info Card */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="shyla-brightblox.jpg" 
                alt="Web3 Mentor" 
                className="w-full h-[500px] object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Mentor Info Card */}
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
                {/* Mentor Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>Sarah Martinez</h3>
                  <p className="text-white/70">Co-founder of Web3 Career Academy</p>
                </div>
                
                {/* Achievement - moves to bottom on mobile */}
                <div className="flex items-center gap-3 bg-gradient-to-r from-[#22d3ee]/10 to-[#10b981]/10 border border-[#22d3ee]/20 rounded-xl px-4 py-3 md:flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#22d3ee]/20 to-[#10b981]/20 border border-[#22d3ee]/30">
                    <Award className="h-5 w-5 text-[#22d3ee]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#22d3ee] uppercase tracking-wide">Expert in Web3</span>
                    <p className="text-xs text-white/70">Career Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Mentor Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>
                Meet Your Mentor
              </h2>
              
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Sarah Martinez is a Web3 career strategist and entrepreneur who co-founded Web3 Career Academy, 
                  a platform that has helped 2,000+ professionals transition into blockchain careers and 
                  generated $50M+ in career value for our students.
                </p>
                
                <p>
                  She has guided over 15,000+ learners to break into Web3, land six-figure roles, and build 
                  successful careers in DeFi, NFTs, and blockchain technology. Her students now work at 
                  top companies like Coinbase, Uniswap, and OpenSea.
                </p>
                
                <p>
                  Named "Web3 Career Coach of the Year 2023" by Blockchain Weekly, Sarah's vision is to 
                  democratize access to Web3 careers by teaching practical, actionable skills that 
                  non-technical professionals can implement immediately.
                </p>
              </div>
            </div>

            {/* Social Media Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-red-500/20 rounded-full mx-auto mb-3">
                  <Youtube className="h-6 w-6 text-red-500" />
                </div>
                <div className="text-2xl font-bold text-white">2.1M+</div>
                <div className="text-sm text-white/70">subscribers</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mx-auto mb-3">
                  <Instagram className="h-6 w-6 text-pink-500" />
                </div>
                <div className="text-2xl font-bold text-white">850K+</div>
                <div className="text-sm text-white/70">followers</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mx-auto mb-3">
                  <Linkedin className="h-6 w-6 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-white">125K+</div>
                <div className="text-sm text-white/70">followers</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
