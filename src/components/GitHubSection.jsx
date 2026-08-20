import React, { useState } from 'react';
import { Star, GitFork, ExternalLink, Activity, Code, Calendar, CheckCircle } from 'lucide-react';
import { Github } from './Icons';

export default function GitHubSection() {
  const [hoveredCell, setHoveredCell] = useState(null);

  // Generate 365 days simulated contribution grid data
  const generateContributionData = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = [];
    const count = 52 * 7; // 364 days

    for (let i = 0; i < count; i++) {
      const random = Math.random();
      let level = 0;
      if (random > 0.85) level = 4;
      else if (random > 0.65) level = 3;
      else if (random > 0.45) level = 2;
      else if (random > 0.25) level = 1;

      days.push({
        dayIndex: i,
        commits: level === 0 ? 0 : level === 1 ? 2 : level === 2 ? 5 : level === 3 ? 9 : 14,
        level,
        date: `2026-Day ${i + 1}`
      });
    }
    return { months, days };
  };

  const contributionData = generateContributionData();

  const getCellBg = (level) => {
    switch (level) {
      case 1: return 'bg-emerald-950 border-emerald-800/40';
      case 2: return 'bg-emerald-800 border-emerald-600/50';
      case 3: return 'bg-emerald-600 border-emerald-400/60';
      case 4: return 'bg-emerald-400 border-emerald-200 shadow-sm shadow-emerald-400/40';
      default: return 'bg-gray-900/60 border-white/5';
    }
  };

  // Real GitHub repositories from github.com/shahriar12345123
  const pinnedRepos = [
    {
      name: 'PROJECT-TEMPORARY-frontend',
      description: 'Full-stack project frontend built with JavaScript. Features React UI with modern design and Vercel deployment.',
      stars: 0,
      forks: 0,
      language: 'JavaScript',
      langColor: 'bg-yellow-400',
      url: 'https://github.com/shahriar12345123/PROJECT-TEMPORARY-frontend',
      homepage: 'https://project-temporary-frontend.vercel.app'
    },
    {
      name: 'tasksphere-frontend',
      description: 'TaskSphere — A modern task management application frontend. Built with React and JavaScript, deployed on Vercel.',
      stars: 0,
      forks: 0,
      language: 'JavaScript',
      langColor: 'bg-yellow-400',
      url: 'https://github.com/shahriar12345123/tasksphere-frontend',
      homepage: 'https://task-veroo.vercel.app'
    },
    {
      name: 'QR-Forge',
      description: 'QR-Forge — A modern tool for generating custom, high-resolution QR codes quickly and easily.',
      stars: 0,
      forks: 0,
      language: 'HTML',
      langColor: 'bg-orange-500',
      url: 'https://github.com/shahriar12345123/QR-Forge',
      homepage: 'https://github.com/shahriar12345123/QR-Forge'
    }
  ];

  // All repositories for the "All Repositories" listing
  const allRepos = [
    { name: 'PROJECT-TEMPORARY-frontend', language: 'JavaScript', url: 'https://github.com/shahriar12345123/PROJECT-TEMPORARY-frontend' },
    { name: 'PROJECT-TEMPORARY-backend', language: 'PLpgSQL', url: 'https://github.com/shahriar12345123/PROJECT-TEMPORARY-backend' },
    { name: 'Apple-Admin', language: null, url: 'https://github.com/shahriar12345123/Apple-Admin' },
    { name: 'tasksphere-frontend', language: 'JavaScript', url: 'https://github.com/shahriar12345123/tasksphere-frontend' },
    { name: 'Tasksphere-backend', language: 'JavaScript', url: 'https://github.com/shahriar12345123/Tasksphere-backend' },
    { name: 'helium-TXT-ADS', language: 'HTML', url: 'https://github.com/shahriar12345123/helium-TXT-ADS' },
    { name: 'helium', language: 'Dart', url: 'https://github.com/shahriar12345123/helium' },
    { name: 'QR-Forge', language: 'HTML', url: 'https://github.com/shahriar12345123/QR-Forge' },
    { name: 'landing-page', language: 'HTML', url: 'https://github.com/shahriar12345123/landing-page' },
    { name: 'DeepLine-Developer', language: null, url: 'https://github.com/shahriar12345123/DeepLine-Developer' },
  ];

  const getLangColor = (lang) => {
    const colors = {
      'JavaScript': 'bg-yellow-400',
      'TypeScript': 'bg-blue-500',
      'HTML': 'bg-orange-500',
      'Dart': 'bg-cyan-400',
      'PLpgSQL': 'bg-indigo-400',
    };
    return colors[lang] || 'bg-gray-400';
  };

  return (
    <section id="github" className="py-24 relative bg-gray-950/70 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest">
            <Github className="w-3.5 h-3.5" />
            <span>Open Source & Activity</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            GitHub <span className="gradient-text-emerald">Contributions & Repos</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Continuous coding activity across {allRepos.length}+ public repositories on <a href="https://github.com/shahriar12345123" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline font-semibold">github.com/shahriar12345123</a>.
          </p>
        </div>

        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Public Repositories', val: `${allRepos.length}`, icon: Code, color: 'text-blue-400' },
            { label: 'Languages Used', val: '5+', icon: Star, color: 'text-yellow-400' },
            { label: 'Projects Deployed', val: '8+', icon: Activity, color: 'text-emerald-400' },
            { label: 'Active Since', val: '2024', icon: GitFork, color: 'text-purple-400' },
          ].map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} className="glass-card p-5 rounded-2xl border border-white/10 text-center">
                <IconComponent className={`w-5 h-5 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-extrabold text-white font-heading">{stat.val}</div>
                <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* GitHub Contribution Heatmap Card */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 mb-12 space-y-4 overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-900 border border-white/10 flex items-center justify-center text-emerald-400">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Contribution Activity (2026)</h3>
                <div className="text-xs text-gray-400 font-mono">@shahriar12345123 — Active coding & deployment</div>
              </div>
            </div>

            <a
              href="https://github.com/shahriar12345123"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold border border-gray-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Contribution Heatmap Grid */}
          <div className="overflow-x-auto pt-2 pb-2">
            <div className="min-w-[700px]">
              
              {/* Month Labels */}
              <div className="flex justify-between text-[10px] font-mono text-gray-400 mb-2 px-1">
                {contributionData.months.map(m => (
                  <span key={m}>{m}</span>
                ))}
              </div>

              {/* Grid Cells */}
              <div className="grid grid-rows-7 grid-flow-col gap-1.5">
                {contributionData.days.map((day) => (
                  <div
                    key={day.dayIndex}
                    onMouseEnter={() => setHoveredCell(day)}
                    onMouseLeave={() => setHoveredCell(null)}
                    className={`w-3 h-3 rounded-sm border transition-all cursor-pointer hover:scale-125 ${getCellBg(day.level)}`}
                    title={`${day.commits} commits on day ${day.dayIndex + 1}`}
                  ></div>
                ))}
              </div>

              {/* Heatmap Legend */}
              <div className="flex items-center justify-between pt-4 text-[11px] text-gray-400 font-mono">
                <div>
                  {hoveredCell ? (
                    <span className="text-emerald-400 font-semibold">{hoveredCell.commits} commits recorded</span>
                  ) : (
                    <span>Hover over any day square to inspect commit volume</span>
                  )}
                </div>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  <div className="w-3 h-3 rounded-sm bg-gray-900 border border-white/5"></div>
                  <div className="w-3 h-3 rounded-sm bg-emerald-950 border border-emerald-800"></div>
                  <div className="w-3 h-3 rounded-sm bg-emerald-800 border border-emerald-600"></div>
                  <div className="w-3 h-3 rounded-sm bg-emerald-600 border border-emerald-400"></div>
                  <div className="w-3 h-3 rounded-sm bg-emerald-400 border border-emerald-200"></div>
                  <span>More</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Pinned Repositories Grid */}
        <div className="space-y-4 mb-12">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span>Featured GitHub Repositories</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pinnedRepos.map((repo, idx) => (
              <div key={idx} className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base font-bold text-blue-400 hover:underline flex items-center gap-1.5"
                    >
                      <span>{repo.name}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-gray-400 border border-white/10">Public</span>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{repo.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs text-gray-400 font-mono">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`}></span>
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    {repo.homepage && (
                      <a href={repo.homepage} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-emerald-400 hover:underline">
                        <ExternalLink className="w-3 h-3" /> Live
                      </a>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-gray-400" /> {repo.forks}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Repositories Grid */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-400" />
            <span>All Public Repositories ({allRepos.length})</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {allRepos.map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="glass-card p-4 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all group flex items-center gap-3"
              >
                <div className={`w-3 h-3 rounded-full ${getLangColor(repo.language)} shrink-0`}></div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white truncate group-hover:text-blue-400 transition-colors">{repo.name}</div>
                  <div className="text-[10px] text-gray-400 font-mono">{repo.language || 'N/A'}</div>
                </div>
                <ExternalLink className="w-3 h-3 text-gray-600 shrink-0 ml-auto group-hover:text-blue-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
