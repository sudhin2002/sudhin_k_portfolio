import React from 'react';
import { motion } from 'framer-motion';
import { Link2, Puzzle, Users, Zap, Compass } from 'lucide-react';

const row1 = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', color: 'rgba(55, 118, 171, 0.6)' },
  { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg', color: 'rgba(1, 117, 194, 0.6)' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', color: 'rgba(247, 223, 30, 0.6)' },
  { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg', color: 'rgba(9, 46, 32, 0.8)' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg', color: 'rgba(2, 86, 155, 0.6)' },
  { name: 'REST APIs', customIcon: <Link2 size={40} className="text-purple-400" />, color: 'rgba(168, 85, 247, 0.6)' }
];

const row2 = [
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', color: 'rgba(68, 121, 161, 0.6)' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', color: 'rgba(71, 162, 72, 0.6)' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', color: 'rgba(240, 80, 50, 0.6)' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', color: 'rgba(255, 255, 255, 0.4)' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', color: 'rgba(255, 108, 55, 0.6)' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', color: 'rgba(0, 122, 204, 0.6)' },
  { name: 'PyCharm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg', color: 'rgba(33, 215, 137, 0.6)' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', color: 'rgba(242, 78, 30, 0.6)' }
];

const row3 = [
  { name: 'Problem Solving', customIcon: <Puzzle size={40} className="text-indigo-400" />, color: 'rgba(99, 102, 241, 0.6)' },
  { name: 'Team Collaboration', customIcon: <Users size={40} className="text-blue-400" />, color: 'rgba(59, 130, 246, 0.6)' },
  { name: 'Quick Learning', customIcon: <Zap size={40} className="text-yellow-400" />, color: 'rgba(234, 179, 8, 0.6)' },
  { name: 'Adaptability', customIcon: <Compass size={40} className="text-cyan-400" />, color: 'rgba(6, 182, 212, 0.6)' }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-gray-950">
      
      {/* Dynamic CSS for Marquee and Background */}
      <style>
        {`
          .marquee-container {
            display: flex;
            overflow: hidden;
            width: 100vw;
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
          .marquee-track-left {
            display: flex;
            width: max-content;
            animation: scroll-left 40s linear infinite;
          }
          .marquee-track-right {
            display: flex;
            width: max-content;
            animation: scroll-right 40s linear infinite;
          }
          .marquee-container:hover .marquee-track-left,
          .marquee-container:hover .marquee-track-right {
            animation-play-state: paused;
          }
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>

      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary-600/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-bold tracking-wider">
            TECH STACK
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Technologies I <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500">Work With</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Tools, frameworks, and technologies I use to build modern scalable applications.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col gap-8 py-4">
        {/* Row 1 (Left) */}
        <div className="marquee-container">
          <div className="marquee-track-left gap-6 px-3">
            {[...row1, ...row1, ...row1, ...row1].map((skill, i) => (
              <SkillCard key={`row1-${i}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Row 2 (Right) */}
        <div className="marquee-container">
          <div className="marquee-track-right gap-6 px-3">
            {[...row2, ...row2, ...row2, ...row2].map((skill, i) => (
              <SkillCard key={`row2-${i}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Row 3 (Left) */}
        <div className="marquee-container">
          <div className="marquee-track-left gap-6 px-3">
            {[...row3, ...row3, ...row3, ...row3].map((skill, i) => (
              <SkillCard key={`row3-${i}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill }) => {
  return (
    <div 
      className="w-40 h-40 md:w-48 md:h-48 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/40 dark:bg-black/30 backdrop-blur-md border border-gray-200/50 dark:border-white/10 transition-all duration-500 hover:-translate-y-3 group cursor-default relative overflow-hidden"
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 30px ${skill.color}`; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `none`; }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:scale-110">
        {skill.customIcon ? (
          skill.customIcon
        ) : (
          <img 
            src={skill.icon} 
            alt={skill.name} 
            className={`w-full h-full object-contain filter drop-shadow-md ${skill.name === 'GitHub' ? 'dark:invert' : ''}`}
          />
        )}
      </div>
      <span className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors relative z-10">
        {skill.name}
      </span>
    </div>
  );
};

export default Skills;
