import React from 'react';
import { ArrowRight, Download, Eye, Send, Code, Sparkles, Database, ShieldCheck, Zap, Layout } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-grid-pattern overflow-hidden">
      {/* Background Orbs */}
      <div className="glow-orb w-96 h-96 bg-blue-600/30 top-1/4 -left-20 animate-pulse-glow"></div>
      <div className="glow-orb w-96 h-96 bg-purple-600/30 bottom-10 -right-20 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      <div className="glow-orb w-64 h-64 bg-emerald-500/20 top-1/3 right-1/4 animate-pulse-glow" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-blue-400 -ml-4"></span>
              <span>Available for Frontend & Full-Stack Projects</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="gradient-text">Shahriar Bin Rifat</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-300 flex items-center gap-2">
                <span className="text-blue-400">Frontend</span> & Web Specialist
              </h2>
            </div>

            {/* Short Intro */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed">
              I build responsive, high-performance web applications using <span className="text-white font-semibold underline decoration-blue-500/60">React</span>, <span className="text-white font-semibold underline decoration-emerald-500/60">Supabase</span>, <span className="text-white font-semibold underline decoration-amber-500/60">Firebase</span>, Node.js, and modern web technologies. Transforming Figma designs into pixel-perfect code.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider mr-1">Stack:</span>
              {['React', 'Tailwind CSS', 'Supabase', 'Firebase', 'Node.js', 'Express', 'MySQL', 'Stripe', 'Figma'].map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-800/80 text-gray-200 border border-gray-700/60 shadow-sm hover:border-blue-500/40 transition-colors">
                  {tech}
                </span>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all"
              >
                <Eye className="w-4 h-4" />
                <span>View Projects</span>
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gray-800/90 hover:bg-gray-700/90 text-white border border-gray-700 font-semibold text-sm shadow-md hover:border-blue-500/50 transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-semibold text-sm transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

          </div>

          {/* Right Column: Code Card Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card rounded-2xl p-6 border border-white/10 shadow-2xl relative overflow-hidden animate-float">
              
              {/* Card Window Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                </div>
                <div className="text-xs font-mono text-gray-400">DeveloperProfile.jsx</div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Live
                </div>
              </div>

              {/* Code Snippet Display */}
              <pre className="font-mono text-xs text-gray-300 leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;{"\n"}
                  {"  "}<span className="text-red-400">name</span>: <span className="text-emerald-300">'Shahriar Bin Rifat'</span>,{"\n"}
                  {"  "}<span className="text-red-400">role</span>: <span className="text-emerald-300">'Frontend Developer'</span>,{"\n"}
                  {"  "}<span className="text-red-400">spec</span>: [<span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'Tailwind'</span>, <span className="text-emerald-300">'Supabase'</span>],{"\n"}
                  {"  "}<span className="text-red-400">experience</span>: <span className="text-amber-400">3</span> + <span className="text-gray-400">// years</span>,{"\n"}
                  {"  "}<span className="text-red-400">figmaToCode</span>: <span className="text-blue-400">true</span>,{"\n"}
                  {"  "}<span className="text-red-400">passion</span>: <span className="text-emerald-300">'Building High-Performance Web Apps'</span>{"\n"}
                  &#125;;{"\n\n"}
                  <span className="text-purple-400">function</span> <span className="text-yellow-300">buildAwesomeApp</span>() &#123;{"\n"}
                  {"  "}<span className="text-purple-400">return</span> developer.<span className="text-yellow-300">deliverQuality</span>();{"\n"}
                  &#125;
                </code>
              </pre>

              {/* Decorative Floating Badges */}
              <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2.5 rounded-xl border border-blue-500/30 flex items-center gap-3 shadow-lg">
                <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Pixel-Perfect</div>
                  <div className="text-[10px] text-gray-400">Figma to React UI</div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 glass-card px-4 py-2.5 rounded-xl border border-emerald-500/30 flex items-center gap-3 shadow-lg">
                <div className="p-2 rounded-lg bg-emerald-600/20 text-emerald-400">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Supabase & Firebase</div>
                  <div className="text-[10px] text-gray-400">Backend Ready</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
