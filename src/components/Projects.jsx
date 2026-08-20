import React, { useState } from 'react';
import { Sparkles, Eye, ArrowUpRight, Play, ExternalLink, Code2 } from 'lucide-react';
import { Github } from './Icons';

export default function Projects({ onOpenModal }) {
  const [filterCategory, setFilterCategory] = useState('All');

  const projects = [
    {
      id: 'saas-dashboard',
      title: 'SaaS Analytics Dashboard',
      category: 'Full-Stack',
      description: 'High-performance real-time analytics dashboard featuring multi-tenant user authentication, theme switcher, responsive chart metrics, user profile management, and live activity streams.',
      tech: ['React', 'Tailwind CSS', 'Firebase', 'Express', 'Node.js'],
      role: 'Lead Frontend & UI Developer',
      image: '/images/saas_dashboard.jpg',
      github: 'https://github.com/shahriar-rifat/saas-analytics-dashboard',
      features: [
        'Multi-tenant authentication & role permissions',
        'Interactive chart visualization',
        'Dark/Light mode theme switching',
        'Responsive analytics grid & widgets',
      ]
    },
    {
      id: 'auth-system',
      title: 'Multi-Provider Authentication System',
      category: 'Auth & Security',
      description: 'Secure, production-ready authentication engine supporting Email/Password login, Google Sign-In (SSO), Supabase Auth, Firebase Auth, protected route guards, and account settings.',
      tech: ['React', 'Supabase Auth', 'Firebase Auth', 'Tailwind CSS', 'React Router'],
      role: 'Frontend & Auth Specialist',
      image: '/images/auth_system.jpg',
      github: 'https://github.com/shahriar-rifat/multi-provider-auth-system',
      features: [
        'Email & Password authentication with session storage',
        'Google OAuth SSO integration',
        'Protected route wrappers for React Router',
        'Supabase RLS & Firebase security rules',
      ]
    },
    {
      id: 'ecommerce-website',
      title: 'Modern E-Commerce Platform & Stripe',
      category: 'Full-Stack',
      description: 'Feature-complete online shopping experience with catalog filtering, real-time cart state management, checkout flow, Stripe payment gateway, and Node.js backend order processing.',
      tech: ['React', 'Node.js', 'MySQL', 'Stripe API', 'Tailwind CSS'],
      role: 'Full-Stack Developer',
      image: '/images/ecommerce.jpg',
      github: 'https://github.com/shahriar-rifat/react-stripe-ecommerce',
      features: [
        'Dynamic product catalog with instant search & tags',
        'Side drawer shopping cart with live totals',
        'Stripe payment intent & checkout integration',
        'MySQL database order records',
      ]
    },
    {
      id: 'multistep-form',
      title: 'Multi-Step Onboarding Form Wizard',
      category: 'Frontend UI',
      description: 'Interactive multi-step wizard form with real-time field validation, progress indicators, step state preservation, dynamic error messages, and backend REST API submission.',
      tech: ['React', 'Express.js', 'MySQL', 'Tailwind CSS', 'Figma to Code'],
      role: 'Frontend UI/UX Developer',
      image: '/images/multistep_form.jpg',
      github: 'https://github.com/shahriar-rifat/multi-step-form-wizard',
      features: [
        '4-step onboarding wizard progression',
        'Real-time field validation & regex checking',
        'API payload submission & status indicator',
        'Responsive layout built from Figma specs',
      ]
    }
  ];

  const categories = ['All', 'Full-Stack', 'Auth & Security', 'Frontend UI'];

  const filteredProjects = filterCategory === 'All'
    ? projects
    : projects.filter(p => p.category === filterCategory);

  return (
    <section id="projects" className="py-24 relative bg-gray-950/90 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest">
            <Code2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            High-quality applications demonstrating full-stack engineering, clean frontend code, Supabase/Firebase backends, and Stripe payment flows.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${filterCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-gray-900 text-gray-400 hover:text-white border border-white/5 hover:border-white/15'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between group glass-card-hover"
            >
              {/* Project Image Banner */}
              <div className="relative aspect-video overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>

                {/* Category & Role Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-950/80 text-blue-400 border border-blue-500/30 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                <button
                  onClick={() => onOpenModal(project)}
                  className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/90 hover:bg-blue-500 text-white text-xs font-bold shadow-lg backdrop-blur-md hover:scale-105 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Test Interactive Live Demo</span>
                </button>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 mb-4">
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar: Tech Badges & GitHub Button */}
                <div className="pt-4 border-t border-white/10 space-y-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-white/5 text-gray-300 text-[11px] font-medium border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-gray-400 font-mono">Role: <strong className="text-white">{project.role}</strong></span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenModal(project)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 text-xs font-semibold border border-blue-500/30 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Interactive Demo</span>
                      </button>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold border border-gray-700 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
