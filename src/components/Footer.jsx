import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-950/50 backdrop-blur-lg">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer text-2xl font-bold text-gradient mb-2 block">
              Sudhin K
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Python Full Stack Developer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <SocialLink href="https://github.com/sudhin2002" icon={<Github size={20} />} />
            <SocialLink href="https://www.linkedin.com/in/sudhin-k" icon={<Linkedin size={20} />} />
            <SocialLink href="mailto:sudhin.k2002@gmail.com" icon={<Mail size={20} />} />
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <p>© {currentYear} Sudhin K. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;
