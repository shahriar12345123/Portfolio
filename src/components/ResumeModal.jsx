import React from 'react';
import { X, Download, Printer, FileText, CheckCircle, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const triggerDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Create a plain downloadable HTML text document containing the full resume
    const resumeText = `===================================================================
SHAHRIAR BIN RIFAT - FRONTEND & WEB DEVELOPER RESUME
Email: shahriar.rifat.dev@gmail.com | Portfolio: shahriar-rifat.dev
GitHub: github.com/shahriar-rifat | LinkedIn: linkedin.com/in/shahriar-rifat
===================================================================

SUMMARY:
Frontend and Web Developer with 3+ years of practical experience building responsive web applications using React, Supabase, Firebase, Node.js, Express, MySQL, and Tailwind CSS. Specialized in Figma-to-React development, state management, secure authentication, and Stripe payment integrations.

SKILLS & TECHNOLOGIES:
• Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Bootstrap, React Router
• Backend & DB: Node.js, Express.js, REST API, MySQL, Firebase (Firestore/Auth), Supabase DB/Auth
• Integration & Tools: Stripe Checkout, Git, GitHub, Vite, VS Code, Figma to Code

FEATURED PROJECTS:
1. SaaS Analytics Dashboard (React, Tailwind, Firebase, Express)
   - Built real-time analytics dashboard with multi-tenant authentication, dark mode, and dynamic charts.
2. Multi-Provider Authentication System (React, Supabase, Firebase)
   - Created secure auth portal with Email/Password, Google SSO, and JWT route guards.
3. E-Commerce Platform & Stripe (React, Node.js, MySQL, Stripe)
   - Developed store catalog, cart drawer, and Stripe Payment Intent checkout flow.
4. Multi-Step Onboarding Form Wizard (React, Express, MySQL)
   - Designed 4-step wizard with real-time field validation and sub-2 minute completion time.

EXPERIENCE:
• Freelance Frontend Developer (2023 - Present)
  - Delivered 15+ client websites from Figma designs with 100% on-time completion.
• Personal Project Engineering (2022 - Present)
  - Built 4 full-stack applications with React, Supabase, Firebase, and Express.

EDUCATION:
• Diploma in Engineering - Computer Technology / Electronics
• Secondary School Certificate (SSC) - Science Group
===================================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Shahriar_Bin_Rifat_Frontend_Developer_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:static">
      <div className="glass-card max-w-3xl w-full rounded-2xl border border-white/20 shadow-2xl overflow-hidden my-8 relative flex flex-col max-h-[90vh] print:max-h-none print:shadow-none print:border-none print:text-black print:bg-white">
        
        {/* Modal Controls Bar (Hidden during printing) */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-gray-900/90 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-white">Curriculum Vitae / Resume</h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold border border-gray-700 transition-colors"
            >
              <Printer className="w-4 h-4 text-gray-300" />
              <span>Print PDF</span>
            </button>

            <button
              onClick={triggerDownload}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white bg-white/5 hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-8 overflow-y-auto flex-1 space-y-6 bg-gray-950 text-white print:bg-white print:text-black print:overflow-visible">
          
          {/* Header Info */}
          <div className="border-b border-white/10 print:border-gray-300 pb-6 space-y-2">
            <h1 className="text-3xl font-extrabold font-heading text-white print:text-black">SHAHRIAR BIN RIFAT</h1>
            <div className="text-base font-bold text-blue-400 print:text-blue-700">Frontend & Web Developer</div>
            
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-gray-300 print:text-gray-700 font-mono">
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-blue-400" /> shahriar.rifat.dev@gmail.com</span>
              <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5 text-emerald-400" /> shahriar-rifat.dev</span>
              <span className="flex items-center gap-1"><Github className="w-3.5 h-3.5 text-purple-400" /> github.com/shahriar-rifat</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-blue-400 print:text-blue-800 uppercase tracking-widest">PROFESSIONAL SUMMARY</h2>
            <p className="text-xs sm:text-sm text-gray-300 print:text-gray-800 leading-relaxed">
              Results-driven Frontend Developer with 3+ years of experience engineering responsive, high-performance web applications using React, JavaScript, Supabase, Firebase, Node.js, and Tailwind CSS. Proven expertise in converting Figma designs into clean code, implementing secure auth systems, and integrating Stripe payment workflows.
            </p>
          </div>

          {/* Technical Skills Matrix */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-blue-400 print:text-blue-800 uppercase tracking-widest">TECHNICAL SKILLS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300 print:text-gray-800 font-mono">
              <div><strong className="text-white print:text-black">Frontend:</strong> React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, React Router</div>
              <div><strong className="text-white print:text-black">Backend & DB:</strong> Node.js, Express.js, REST API, MySQL, Firebase, Supabase DB</div>
              <div><strong className="text-white print:text-black">Authentication:</strong> Supabase Auth, Firebase Auth, Google SSO</div>
              <div><strong className="text-white print:text-black">Payments & Tools:</strong> Stripe API, Git, GitHub, Vite, VS Code, Figma to Code</div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-blue-400 print:text-blue-800 uppercase tracking-widest">KEY PROJECTS</h2>
            
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-bold text-white print:text-black">
                  <span>SaaS Analytics Dashboard</span>
                  <span className="font-mono text-gray-400 print:text-gray-600">React + Firebase + Express</span>
                </div>
                <p className="text-gray-300 print:text-gray-700">Designed analytics dashboard with multi-tenant auth, responsive chart components, and theme switcher.</p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-white print:text-black">
                  <span>Multi-Provider Authentication Portal</span>
                  <span className="font-mono text-gray-400 print:text-gray-600">React + Supabase + Firebase</span>
                </div>
                <p className="text-gray-300 print:text-gray-700">Created auth engine supporting Email/Password login, Google SSO, and protected route wrappers.</p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-white print:text-black">
                  <span>E-Commerce Platform & Stripe Checkout</span>
                  <span className="font-mono text-gray-400 print:text-gray-600">React + Node.js + MySQL + Stripe</span>
                </div>
                <p className="text-gray-300 print:text-gray-700">Built store catalog, cart state drawer, Stripe Payment Intent checkout, and backend order records.</p>
              </div>
            </div>
          </div>

          {/* Practical Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-blue-400 print:text-blue-800 uppercase tracking-widest">DEVELOPMENT EXPERIENCE</h2>
            
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-bold text-white print:text-black">
                  <span>Freelance Frontend Developer</span>
                  <span className="font-mono text-gray-400 print:text-gray-600">2023 - Present</span>
                </div>
                <ul className="list-disc list-inside text-gray-300 print:text-gray-700 space-y-1 mt-1">
                  <li>Delivered 15+ client web projects from Figma designs with 100% on-time delivery rate.</li>
                  <li>Implemented Supabase Auth, Firebase Firestore databases, and Stripe checkout systems for client apps.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold text-white print:text-black">
                  <span>Personal Web App Engineer</span>
                  <span className="font-mono text-gray-400 print:text-gray-600">2022 - Present</span>
                </div>
                <ul className="list-disc list-inside text-gray-300 print:text-gray-700 space-y-1 mt-1">
                  <li>Engineered 4 full-stack projects to refine state architecture, API validation, and UI performance.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-blue-400 print:text-blue-800 uppercase tracking-widest">EDUCATION</h2>
            <div className="text-xs space-y-1">
              <div className="flex justify-between text-gray-200 print:text-gray-900 font-semibold">
                <span>Diploma in Engineering (Computer Technology / Electronics)</span>
                <span className="font-mono text-gray-400 print:text-gray-600">Completed</span>
              </div>
              <div className="flex justify-between text-gray-300 print:text-gray-700">
                <span>Secondary School Certificate (SSC) - Science</span>
                <span className="font-mono text-gray-400 print:text-gray-600">Completed</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer (Hidden during printing) */}
        <div className="p-4 border-t border-white/10 bg-gray-900/90 flex items-center justify-between print:hidden">
          <span className="text-xs text-gray-400">PDF printable format prepared.</span>
          <button
            onClick={triggerDownload}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume File</span>
          </button>
        </div>

      </div>
    </div>
  );
}
