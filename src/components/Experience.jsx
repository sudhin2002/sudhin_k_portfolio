import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2 } from 'lucide-react';

// ES Module imports for local assets
import qisLogo from '../assets/experience/qis.png';
import softroniicsLogo from '../assets/experience/softroniics.png';

const experienceData = [
  {
    role: "Python Full Stack Developer Trainee",
    company: "Quest Innovative Solutions",
    period: "Sep 2025 – Present",
    points: [
      "Worked on HTML, CSS, JavaScript, Angular, Django, and REST APIs",
      "Developed mini projects using Python and SQL",
      "Learned CRUD operations, API integration, debugging, and Git/GitHub"
    ],
    logo: qisLogo,
    color: "bg-blue-500"
  },
  {
    role: "Flutter Developer Intern",
    company: "Softroniics",
    period: "Jan 2024 – Jun 2024",
    points: [
      "Worked on Flutter application development and UI improvements",
      "Learned API integration, debugging, testing, and Figma basics",
      "Contributed to project development as part of MCA final year internship"
    ],
    logo: softroniicsLogo,
    color: "bg-teal-500"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work <span className="text-gradient">Experience</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-10 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-purple-500 rounded-full opacity-20"></div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot/Icon */}
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-20 h-20 md:w-28 md:h-28 p-3 md:p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 z-10 flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]`}>
                  <LogoImage src={exp.logo} alt={exp.company} fallbackIcon={<Building2 size={36} className="text-gray-400" />} />
                </div>

                <div className="w-full md:w-1/2 pl-24 md:pl-0">
                  <div className={`glass-card p-5 md:p-6 rounded-2xl md:mx-10 shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary-500/20 hover:shadow-primary-500/5 ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                    <div className={`flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium mb-3 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                      <Briefcase size={18} />
                      <span className="bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full text-sm border border-primary-100 dark:border-primary-900">{exp.period}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                    <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-4">{exp.company}</h4>

                    <ul className={`space-y-2 text-gray-600 dark:text-gray-400 text-sm md:text-base ${index % 2 !== 0 ? 'md:text-right' : 'text-left'}`}>
                      {exp.points.map((point, i) => (
                        <li key={i} className={`flex ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-2 items-start`}>
                          <span className="text-primary-500 mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const LogoImage = ({ src, alt, fallbackIcon }) => {
  const [error, setError] = useState(false);

  if (error) {
    return fallbackIcon;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain object-center filter drop-shadow-sm"
      onError={() => setError(true)}
    />
  );
};

export default Experience;
