import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-scroll';

// ES Module imports for local assets
import resumePdf from '../assets/resume/Sudhin_K.pdf';
import profileImg from '../assets/profile/profile.jpg';

const useTypewriter = (words, typingSpeed = 100, deletingSpeed = 50, delay = 2000) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeedState, setTypingSpeedState] = useState(typingSpeed);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      if (!isDeleting && text === fullText) {
        setTypingSpeedState(delay);
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeedState(typingSpeed);
      } else {
        setTypingSpeedState(isDeleting ? deletingSpeed : typingSpeed);
      }
    };

    timer = setTimeout(handleType, typingSpeedState);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, delay, typingSpeedState]);

  return text;
};

const Hero = () => {
  const roles = ["Python Full Stack Developer", "Software Developer"];
  const roleText = useTypewriter(roles, 100, 50, 2000);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-lg md:text-xl font-medium text-primary-600 dark:text-primary-400 mb-4">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Sudhin K
            </h1>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6 font-mono min-h-[80px] md:min-h-0 flex items-center justify-center md:justify-start">
              <span className="text-primary-500 mr-2">&gt;</span>
              <span>{roleText}</span>
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-3 h-8 bg-primary-500 ml-1"
              />
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto md:mx-0">
              Passionate about building robust web applications and solving complex problems with modern technologies. Crafting beautiful and functional digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8">
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                className="cursor-pointer px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] flex items-center gap-2 group"
              >
                Hire Me
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href={resumePdf} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full glass-panel font-bold hover:bg-white/20 dark:hover:bg-white/5 transition-all flex items-center gap-2 border border-gray-200 dark:border-gray-700 hover:border-primary-500 group text-gray-800 dark:text-gray-200"
              >
                Download CV
                <Download size={18} className="group-hover:-translate-y-1 transition-transform text-primary-500" />
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-6 mb-4">
              <SocialLink href="https://github.com/sudhin2002" icon={<Github size={24} />} />
              <SocialLink href="https://www.linkedin.com/in/sudhin-k" icon={<Linkedin size={24} />} />
              <SocialLink href="mailto:sudhin.k2002@gmail.com" icon={<Mail size={24} />} />
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 dark:text-gray-400">
              <MapPin size={18} />
              <span>Kochi, Kerala</span>
            </div>
          </motion.div>

          {/* Image/Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
              {/* Glowing animated background rings */}
              <div className="absolute inset-0 rounded-full border-4 border-primary-500/20 dark:border-primary-500/10 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border-4 border-dashed border-purple-500/30 dark:border-purple-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-primary-500 to-purple-500 p-1 shadow-[0_0_40px_rgba(99,102,241,0.5)]">
                 <div className="w-full h-full bg-gray-100 dark:bg-gray-900 rounded-full overflow-hidden relative">
                    <img 
                      src={profileImg} 
                      alt="Sudhin K" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<span class="absolute inset-0 flex items-center justify-center text-6xl font-bold text-gray-300 dark:text-gray-700">SK</span>';
                      }}
                    />
                 </div>
              </div>

              {/* Floating Tech Icons */}
              <motion.div 
                animate={{ y: [-15, 15, -15], x: [-5, 5, -5], rotate: [0, 10, -10, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-6 lg:-left-10 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl glass-card flex items-center justify-center shadow-lg border border-white/20 z-10"
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="w-8 h-8 lg:w-10 lg:h-10 object-contain" />
              </motion.div>

              <motion.div 
                animate={{ y: [15, -15, 15], x: [5, -5, 5], rotate: [0, -10, 10, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-16 -right-6 lg:-right-10 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl glass-card flex items-center justify-center shadow-lg border border-white/20 z-10"
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-8 h-8 lg:w-10 lg:h-10 object-contain" />
              </motion.div>

              <motion.div 
                animate={{ y: [-10, 10, -10], x: [10, -10, 10], scale: [1, 1.1, 1] }} 
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 right-10 w-10 h-10 lg:w-12 lg:h-12 rounded-2xl glass-card flex items-center justify-center shadow-lg border border-white/20 z-10"
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" alt="Django" className="w-6 h-6 lg:w-8 lg:h-8 object-contain" />
              </motion.div>

              {/* Available for work badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 glass-card px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.3)] border border-green-500/20 z-20"
              >
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse"></div>
                <span className="text-sm font-bold text-gray-800 dark:text-gray-200 tracking-wide whitespace-nowrap">Available for work</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
  >
    {icon}
  </a>
);

export default Hero;
