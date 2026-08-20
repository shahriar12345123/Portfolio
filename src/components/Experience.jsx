import React from 'react';
import { Briefcase, Code, Globe, GitBranch, CheckCircle2, Calendar, FolderGit2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      category: 'Freelance Projects',
      title: 'Frontend & Web Development Freelancer',
      organization: 'Independent Clients & Small Agencies',
      period: '2023 - Present',
      icon: Globe,
      color: 'from-blue-500 to-indigo-500',
      description: 'Building custom React websites, responsive landing pages from Figma designs, Supabase/Firebase backend setups, and Stripe checkout integrations.',
      highlights: [
        'Delivered 15+ custom client websites with 100% on-time delivery.',
        'Translated complex Figma UI mockups into clean, responsive React code.',
        'Integrated Supabase Auth and Firebase Realtime databases for client portals.',
        'Implemented Stripe payment gateways for e-commerce store clients.'
      ]
    },
    {
      category: 'Personal Projects',
      title: 'Full-Stack Web App Developer',
      organization: 'Self-Directed Product Engineering',
      period: '2022 - Present',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      description: 'Engineering end-to-end web applications, SaaS analytics dashboards, multi-step onboarding forms, and authentication portals to sharpen full-stack capabilities.',
      highlights: [
        'Built full-featured SaaS Dashboard with dark/light themes and analytics charts.',
        'Developed production-grade Auth portal supporting Google SSO and Supabase Auth.',
        'Designed multi-step onboarding wizard with real-time state validation.',
        'Optimized frontend bundles with Vite for lightning-fast sub-second load times.'
      ]
    },
    {
      category: 'Open-Source Contributions',
      title: 'Open Source Contributor & Maintainer',
      organization: 'GitHub Community',
      period: '2023 - Present',
      icon: GitBranch,
      color: 'from-emerald-500 to-teal-500',
      description: 'Actively contributing to open-source UI component repositories, documentation improvements, bug fixes, and sharing reusable React utilities.',
      highlights: [
        'Submitted bug fixes and UI accessibility enhancements to React component repos.',
        'Authored open-source utility snippets for Tailwind CSS dynamic glassmorphism.',
        'Maintained clean documentation and clear git commit conventions.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-gray-950/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work & Project History</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Development <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Practical development experience across freelance client builds, independent product engineering, and open-source contributions.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          
          {/* Vertical Connecting Line */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 opacity-30"></div>

          {experiences.map((exp, idx) => {
            const IconComponent = exp.icon;
            return (
              <div key={idx} className="relative flex flex-col sm:flex-row items-start gap-6 group">
                
                {/* Timeline Icon Badge */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${exp.color} flex items-center justify-center text-white shadow-xl shrink-0 z-10 group-hover:scale-105 transition-transform`}>
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* Card Content */}
                <div className="flex-1 glass-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                    <div>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {exp.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1">{exp.title}</h3>
                      <div className="text-xs text-gray-400 font-medium">{exp.organization}</div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono bg-white/5 px-3 py-1 rounded-lg border border-white/5 shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">Key Contributions:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {exp.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
