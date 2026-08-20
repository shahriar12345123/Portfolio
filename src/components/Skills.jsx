import React, { useState } from 'react';
import { Cpu, Search, CheckCircle2, Layout, Database, ShieldCheck, CreditCard, Wrench, Server } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: Layout,
      skills: [
        { name: 'HTML5', level: 'Expert', desc: 'Semantic markup & accessibility' },
        { name: 'CSS3', level: 'Expert', desc: 'Flexbox, Grid, animations, variables' },
        { name: 'JavaScript', level: 'Advanced', desc: 'ES6+, Async/Await, DOM, APIs' },
        { name: 'React', level: 'Advanced', desc: 'Hooks, Router, Context, Performance' },
        { name: 'Tailwind CSS', level: 'Expert', desc: 'Custom themes, utility-first styling' },
        { name: 'Bootstrap', level: 'Advanced', desc: 'Responsive grid & components' },
        { name: 'Responsive Design', level: 'Expert', desc: 'Mobile-first fluid layouts' },
        { name: 'React Router', level: 'Advanced', desc: 'Dynamic routing & protected routes' },
      ],
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 'Intermediate', desc: 'Runtime environment & event loop' },
        { name: 'Express.js', level: 'Intermediate', desc: 'Middleware, routing, API architecture' },
        { name: 'REST API', level: 'Advanced', desc: 'JSON APIs, CRUD operations, HTTP status' },
      ],
    },
    {
      id: 'database',
      name: 'Database',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 'Intermediate', desc: 'Relational tables, queries, joins' },
        { name: 'Firebase', level: 'Advanced', desc: 'Firestore & Realtime Database' },
        { name: 'Supabase Database', level: 'Advanced', desc: 'PostgreSQL queries, RLS policies' },
      ],
    },
    {
      id: 'auth',
      name: 'Authentication',
      icon: ShieldCheck,
      skills: [
        { name: 'Firebase Authentication', level: 'Advanced', desc: 'Email/Password & Session Auth' },
        { name: 'Supabase Auth', level: 'Advanced', desc: 'User JWT tokens & OAuth providers' },
        { name: 'Google Sign-In (SSO)', level: 'Advanced', desc: 'OAuth 2.0 social login flow' },
      ],
    },
    {
      id: 'payments',
      name: 'Payments',
      icon: CreditCard,
      skills: [
        { name: 'Stripe', level: 'Advanced', desc: 'Stripe Checkout, Payments API, Webhooks' },
      ],
    },
    {
      id: 'tools',
      name: 'Development Tools',
      icon: Wrench,
      skills: [
        { name: 'Git', level: 'Advanced', desc: 'Version control, branching, rebasing' },
        { name: 'GitHub', level: 'Advanced', desc: 'Repositories, Actions, PR workflows' },
        { name: 'Vite', level: 'Advanced', desc: 'Fast HMR build system' },
        { name: 'VS Code', level: 'Expert', desc: 'Extensions, debugging, customization' },
        { name: 'Figma', level: 'Advanced', desc: 'Design inspection & Figma-to-Code' },
      ],
    },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Authentication', 'Payments', 'Development Tools'];

  const getFilteredSkills = () => {
    let result = [];

    skillCategories.forEach(cat => {
      if (activeCategory === 'All' || cat.name === activeCategory) {
        cat.skills.forEach(skill => {
          if (
            skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            skill.desc.toLowerCase().includes(searchQuery.toLowerCase())
          ) {
            result.push({ ...skill, category: cat.name });
          }
        });
      }
    });

    return result;
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-24 relative bg-gray-950/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technologies & <span className="gradient-text">Tooling</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Organized tech stack covering modern frontend, backend services, databases, authentication, and developer workflow tools.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-gray-900/80 text-gray-400 hover:text-white border border-white/5 hover:border-white/15'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Supabase, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-gray-900/90 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

        </div>

        {/* Skills Grid */}
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSkills.map((skill, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover p-4 rounded-xl border border-white/10 flex items-start gap-3 relative group"
              >
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <h4 className="text-sm font-bold text-white truncate">{skill.name}</h4>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white/5 text-blue-300 border border-white/10 shrink-0">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 leading-tight">{skill.desc}</p>
                  <div className="mt-2 text-[10px] text-gray-500 font-mono uppercase tracking-wider">{skill.category}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 glass-card rounded-2xl border border-white/10">
            <p className="text-gray-400 text-sm">No skills found matching "{searchQuery}". Try searching for React, Supabase, or Stripe.</p>
          </div>
        )}

      </div>
    </section>
  );
}
