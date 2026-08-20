import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle, Calendar, School } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      title: 'Diploma in Engineering',
      institution: 'Polytechnic Institute',
      field: 'Computer Science & Technology',
      period: 'Completed',
      description: 'Comprehensive engineering curriculum covering programming fundamentals, data structures, software development life cycle, database design, computer networking, web development, and operating systems.',
      type: 'Diploma'
    },
    {
      title: 'Secondary School Certificate (SSC)',
      institution: 'Board of Intermediate & Secondary Education',
      field: 'Science Group',
      period: 'Completed',
      description: 'Foundational secondary education with focus on Higher Mathematics, Physics, Chemistry, and Information Technology.',
      type: 'SSC'
    }
  ];

  const courses = [
    {
      name: 'Complete React & Modern Frontend Engineering',
      provider: 'Professional Tech Platform',
      year: '2024',
      topics: 'React 18+, Custom Hooks, React Router 6, Context API, Performance Optimization, Vite'
    },
    {
      name: 'Full-Stack Development with Supabase & Firebase',
      provider: 'Advanced Web Academy',
      year: '2023',
      topics: 'Supabase Database/Auth, Firebase Firestore, Row Level Security, Node.js REST APIs, Express'
    },
    {
      name: 'Stripe Payment Gateway Integration',
      provider: 'Dev Masterclass',
      year: '2023',
      topics: 'Stripe Checkout, Payment Intents API, Webhook Event Listeners, Security Best Practices'
    },
    {
      name: 'Figma to Pixel-Perfect Responsive Code',
      provider: 'UI/UX Engineering Workshop',
      year: '2023',
      topics: 'Figma Design Inspection, Tailwind CSS, Responsive Breakpoints, Fluid Typography, Micro-animations'
    }
  ];

  return (
    <section id="education" className="py-24 relative bg-gray-950/90 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Professional Training</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Academic qualifications combined with continuous specialized training in modern web technologies.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Formal Education */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <School className="w-5 h-5 text-blue-400" />
              <span>Formal Academic Education</span>
            </h3>

            {educationList.map((edu, idx) => (
              <div key={idx} className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {edu.type}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white">{edu.title}</h4>
                <div className="text-xs text-blue-400 font-semibold">{edu.institution} • {edu.field}</div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed pt-2">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Specialized Courses & Training */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-emerald-400" />
              <span>Relevant Courses & Training</span>
            </h3>

            <div className="space-y-4">
              {courses.map((course, idx) => (
                <div key={idx} className="glass-card p-5 rounded-xl border border-white/10 flex items-start gap-3 hover:border-emerald-500/30 transition-all">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-white truncate">{course.name}</h4>
                      <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded shrink-0">{course.year}</span>
                    </div>
                    <div className="text-xs text-gray-400">{course.provider}</div>
                    <p className="text-xs text-gray-300 mt-1 font-mono">{course.topics}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
