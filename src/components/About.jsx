import React from 'react';
import { User, Target, Layers, Cpu, Award, CheckCircle, Code2, Sparkles, Database, Layout } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '2+', icon: Award, color: 'from-blue-500 to-indigo-500' },
    { label: 'Projects Completed', value: '20', icon: Layers, color: 'from-purple-500 to-pink-500' },
    { label: 'Client Satisfaction', value: '100%', icon: CheckCircle, color: 'from-emerald-500 to-teal-500' },
    { label: 'GitHub Commits', value: '250+', icon: Code2, color: 'from-amber-500 to-orange-500' },
  ];

  return (
    <section id="about" className="py-24 relative bg-gray-950/60 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Crafting Digital Experiences with <span className="gradient-text">Precision & Passion</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Frontend Developer specialized in building scalable, responsive web apps and translating designs into clean code.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">

          {/* Bio Cards */}
          <div className="lg:col-span-7 space-y-6">

            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-blue-400" />
                <span>Who I Am & What I Do</span>
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                I'm a <strong className="text-white">Frontend Developer</strong> with strong hands-on experience in modern JavaScript frameworks, responsive UI architecture, and backend integrations like <strong className="text-emerald-400">Supabase</strong>, <strong className="text-amber-400">Firebase</strong>, and <strong className="text-blue-400">Node.js</strong>.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                I specialize in taking complex requirements or <strong className="text-purple-400">Figma UI designs</strong> and converting them into blazing-fast, component-driven React web applications with seamless authentication, state management, and API connections.
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <Target className="w-6 h-6 text-emerald-400" />
                <span>My Career Goals</span>
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                My objective is to build high-impact web products, SaaS platforms, and enterprise dashboards that deliver exceptional user experiences. I thrive on solving frontend performance challenges, crafting intuitive user interfaces, and continuously mastering modern web engineering practices.
              </p>
            </div>

          </div>

          {/* Highlights Spotlight Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-8 rounded-2xl border border-blue-500/30 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <h4 className="text-lg font-bold text-white uppercase tracking-wider text-blue-400 flex items-center gap-2">
                <Cpu className="w-5 h-5" />
                <span>Core Competencies</span>
              </h4>

              <ul className="space-y-3">
                {[
                  { title: 'Figma to React Code', desc: 'Exact design fidelity with pixel-perfect responsive CSS' },
                  { title: 'State & Routing Architecture', desc: 'Clean React hooks, Context, and React Router workflows' },
                  { title: 'Database & Auth Systems', desc: 'Supabase DB/Auth, Firebase Authentication & Firestore' },
                  { title: 'Payment Integration', desc: 'Stripe API, Checkout sessions, and webhook flows' },
                  { title: 'REST API & Express Backend', desc: 'Building & consuming RESTful endpoints with Node.js & MySQL' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all">
                    <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">{item.title}</div>
                      <div className="text-xs text-gray-400">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 text-center relative overflow-hidden group">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-tr ${stat.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
