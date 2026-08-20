import React, { useState } from 'react';
import { BookOpen, CheckCircle, AlertTriangle, Lightbulb, TrendingUp, Layers, Code, ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState('case-1');

  const caseStudies = [
    {
      id: 'case-1',
      title: 'Multi-Step Onboarding Form Architecture',
      subtitle: 'Streamlining user signup flow from 6 minutes down to under 2 minutes',
      problem: 'Users were dropping off during a long single-page signup form due to cognitive overload and missing validation feedback.',
      solution: 'Designed and implemented a 4-step wizard interface using React state machine pattern, real-time client validation, and automated progress saving.',
      tech: ['React', 'Express.js', 'MySQL', 'Tailwind CSS', 'Figma to Code'],
      challenges: 'Managing multi-step form state across page refreshes and preventing invalid step jumps while maintaining fast API response times.',
      result: 'Reduced average onboarding completion time to less than 2 minutes and boosted signup conversion rate by +34%.',
      metrics: [
        { label: 'Time Spent', val: '< 2 Mins' },
        { label: 'Conversion Boost', val: '+34%' },
        { label: 'Drop-off Rate', val: '-45%' }
      ]
    },
    {
      id: 'case-2',
      title: 'Real-time Analytics SaaS Dashboard',
      subtitle: 'Optimizing high-frequency metric renders for 80,000+ active users',
      problem: 'The dashboard suffered from heavy re-render lag when loading real-time data feeds and switching between monthly and weekly chart views.',
      solution: 'Re-architected component state using React memoization, memoized charts, and efficient Firebase Firestore real-time snapshot listeners.',
      tech: ['React', 'Tailwind CSS', 'Firebase Firestore', 'Express', 'Node.js'],
      challenges: 'Handling concurrent state updates across multiple chart widgets without blocking the main UI thread during theme switching.',
      result: 'Achieved smooth 60fps chart renders, zero layout thrashing, and sub-100ms dashboard widget load time.',
      metrics: [
        { label: 'FPS Performance', val: '60 FPS' },
        { label: 'Widget Load Time', val: '< 100ms' },
        { label: 'Active Users', val: '80,000+' }
      ]
    },
    {
      id: 'case-3',
      title: 'Supabase & Stripe E-Commerce Engine',
      subtitle: 'Building a frictionless shopping cart & secure payment checkout flow',
      problem: 'The original store had high cart abandonment due to slow payment gateway initialization and lack of instant feedback during checkout.',
      solution: 'Integrated Stripe Payment Intents with custom client-side React shopping cart drawer, instant item calculations, and Supabase RLS order tracking.',
      tech: ['React', 'Supabase DB', 'Stripe API', 'Node.js', 'Tailwind CSS'],
      challenges: 'Synchronizing client cart state with server-side inventory levels to prevent race conditions during peak flash sales.',
      result: 'Increased checkout completion rate by +28% and processed zero failed payment state desyncs across 5,000+ orders.',
      metrics: [
        { label: 'Checkout Conversion', val: '+28%' },
        { label: 'Payment Success Rate', val: '99.9%' },
        { label: 'Orders Processed', val: '5,000+' }
      ]
    }
  ];

  const activeCaseObj = caseStudies.find(c => c.id === selectedCase) || caseStudies[0];

  return (
    <section id="casestudies" className="py-24 relative bg-gray-950/70 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Engineering Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Problem → <span className="gradient-text-emerald">Solution Breakdown</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Detailed case studies showing how I approach real-world engineering challenges, state optimization, and client outcomes.
          </p>
        </div>

        {/* Case Study Tabs Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {caseStudies.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedCase(item.id)}
              className={`px-5 py-3 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
                selectedCase === item.id
                  ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-xl shadow-emerald-600/20 border border-emerald-400/40'
                  : 'bg-gray-900 text-gray-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Detailed Case Card */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="mb-8 pb-6 border-b border-white/10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">{activeCaseObj.title}</h3>
            <p className="text-emerald-400 text-sm font-semibold">{activeCaseObj.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            
            {/* Left Column: Problem & Solution */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="p-5 rounded-2xl bg-red-950/30 border border-red-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  <span>The Problem</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{activeCaseObj.problem}</p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  <span>The Solution</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{activeCaseObj.solution}</p>
              </div>

              <div className="p-5 rounded-2xl bg-blue-950/30 border border-blue-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                  <Code className="w-4 h-4" />
                  <span>Challenges & Engineering Solutions</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{activeCaseObj.challenges}</p>
              </div>

            </div>

            {/* Right Column: Results & Metrics */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              
              <div className="glass-card p-6 rounded-2xl border border-emerald-500/30 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  <TrendingUp className="w-4 h-4" />
                  <span>Final Result & Business Impact</span>
                </div>
                <p className="text-white text-base font-medium leading-relaxed">{activeCaseObj.result}</p>

                {/* Key Metrics Badges */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
                  {activeCaseObj.metrics.map((m, idx) => (
                    <div key={idx} className="text-center p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <div className="text-lg font-bold text-emerald-300 font-heading">{m.val}</div>
                      <div className="text-[10px] text-gray-400 uppercase font-mono">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Pill Container */}
              <div className="p-5 rounded-2xl bg-gray-900 border border-white/10 space-y-3">
                <div className="text-xs text-gray-400 font-mono">Technologies Used:</div>
                <div className="flex flex-wrap gap-2">
                  {activeCaseObj.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-white/5 text-gray-200 text-xs font-medium border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
