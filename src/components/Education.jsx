import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

// ES module import for local asset
import uocLogo from '../assets/education/uoc.png';

const educationData = [
  {
    degree: "MCA (Master of Computer Applications)",
    institution: "CCSIT Mannarkkad College, University of Calicut",
    period: "Aug 2022 – Jun 2024",
    logo: uocLogo,
    color: "bg-primary-500"
  },
  {
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "ST. Mary’s College, Puthanangadi, University of Calicut",
    period: "Jun 2019 – Mar 2022",
    logo: uocLogo,
    color: "bg-purple-500"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Education</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-5 md:p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-6 group hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/10 border border-transparent hover:border-primary-500/20"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                <LogoImage src={item.logo} alt={item.institution} fallbackIcon={<GraduationCap size={32} className="text-gray-400" />} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">{item.degree}</h3>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">{item.institution}</h4>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
                    <Calendar size={14} className="text-primary-500" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
                    <MapPin size={14} className="text-purple-500" />
                    Kerala, India
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
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
      className="w-full h-full object-contain object-center"
      onError={() => setError(true)}
    />
  );
};

export default Education;
