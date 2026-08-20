import React from 'react';
import { Layout, Code, Flame, CreditCard, Smartphone, ShieldCheck, Layers, ArrowUpRight, Sparkles } from 'lucide-react';
import { Figma } from './Icons';

export default function Services() {
  const services = [
    {
      title: 'Frontend Development',
      icon: Layout,
      color: 'from-blue-500 to-cyan-500',
      description: 'Building modern, fast, and scalable web interfaces with clean HTML5, CSS3, JavaScript, and Tailwind CSS.',
      deliverables: ['Custom UI Components', 'Performance Optimization', 'Clean Modular Code', 'SEO-friendly Structure']
    },
    {
      title: 'React Development',
      icon: Code,
      color: 'from-cyan-500 to-blue-600',
      description: 'Crafting single-page web applications (SPAs), state-managed dashboards, and dynamic client interfaces using React.',
      deliverables: ['React Router Setup', 'Hooks & State Management', 'Reusable UI Libraries', 'Vite Speed Optimization']
    },
    {
      title: 'Figma to Code Design',
      icon: Figma,
      color: 'from-purple-500 to-pink-500',
      description: 'Translating Figma design prototypes into 100% pixel-perfect, responsive React components and Tailwind layouts.',
      deliverables: ['Pixel-Perfect Fidelity', 'Cross-Browser Compatibility', 'Mobile First Responsiveness', 'Micro-Animations']
    },
    {
      title: 'Supabase Integration',
      icon: ShieldCheck,
      color: 'from-emerald-500 to-teal-500',
      description: 'Connecting Supabase backend services including PostgreSQL database queries, Supabase Auth, and real-time subscriptions.',
      deliverables: ['Supabase Authentication', 'PostgreSQL Schema & Queries', 'Row Level Security (RLS)', 'Real-time Listeners']
    },
    {
      title: 'Firebase Integration',
      icon: Flame,
      color: 'from-amber-500 to-orange-500',
      description: 'Integrating Firebase services like Firestore Database, Firebase Auth, Google SSO, and hosting deployment.',
      deliverables: ['Google Sign-In (SSO)', 'Firestore Data Operations', 'Cloud Functions Integration', 'Secure Security Rules']
    },
    {
      title: 'Stripe Payment Integration',
      icon: CreditCard,
      color: 'from-indigo-500 to-purple-600',
      description: 'Enabling seamless monetization with Stripe Checkout, subscription billing, and secure client-side payment flows.',
      deliverables: ['Stripe Checkout Sessions', 'Subscription Plans', 'Payment Gateway Flow', 'Order Receipts & Webhooks']
    },
    {
      title: 'Responsive Web Development',
      icon: Smartphone,
      color: 'from-pink-500 to-rose-500',
      description: 'Ensuring your web application adapts seamlessly across mobile phones, tablets, laptops, and ultra-wide displays.',
      deliverables: ['Mobile Touch Navigation', 'Adaptive Grid Layouts', 'Retina Screen Asset Prep', 'Testing Across Viewports']
    },
    {
      title: 'Landing Page Development',
      icon: Sparkles,
      color: 'from-blue-600 to-violet-600',
      description: 'High-converting, ultra-fast landing pages tailored for product launches, SaaS applications, and client portfolios.',
      deliverables: ['High Conversion Design', 'Fast Page Load Speed', 'Interactive Contact Forms', 'Analytics Ready']
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Services & Client Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            High-Quality Development <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Whether you need a dedicated Frontend Engineer for your team or a complete web application built from Figma designs, here is how I can help.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-gray-500 font-semibold">0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-white/5 space-y-2">
                  <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Key Features:</div>
                  <div className="space-y-1">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-1.5 text-xs text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Call to Action Bar */}
        <div className="mt-16 glass-card p-8 rounded-3xl border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">Have a Project or Agency Need in Mind?</h3>
            <p className="text-gray-300 text-sm max-w-xl">
              I can collaborate on your React codebase, build custom Supabase/Firebase integrations, or bring your Figma prototypes to life.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-lg hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
