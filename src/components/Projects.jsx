import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';

// ES Module imports for local assets
import weighmasterImg from '../assets/projects/weighmaster.png';
const projectsData = [
  {
    title: "Weigh Master",
    description: "A weigh scale buying and selling platform with modules for users, admins, and Legal Metrology authorities.",
    tech: ["Flutter", "Dart", "SQL"],
    features: [
      "Warranty and service tracking",
      "Admin dashboard",
      "Legal Metrology validation",
      "Product and order management",
      "Fraud detection support"
    ],
    github: "https://github.com/sudhin2002/Weigh-Master",
    live: "#",
    image: weighmasterImg
  },
  {
    title: "ERB",
    description: "A blockchain-based application for secure peer-to-peer transactions and transparent data management.",
    tech: ["Python", "Blockchain", "HTML", "CSS", "JavaScript"],
    features: [
      "Secure transaction storage",
      "Block verification",
      "Transaction validation",
      "Blockchain transaction history"
    ],
    github: "https://github.com/sudhin2002/ERB",
    live: "#",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Doc Hub",
    description: "A comprehensive management system for scheduling patient appointments and tracking doctor availability.",
    tech: ["Python", "SQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Appointment scheduling",
      "Doctor availability management",
      "Patient workflow handling",
      "Responsive user interface"
    ],
    github: "https://github.com/sudhin2002",
    live: "#",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Dual-Stream",
    description: "A real-time media transmission system for simultaneous webcam and screen sharing using WebRTC.",
    tech: ["React", "WebRTC", "JavaScript", "Node.js"],
    features: [
      "Concurrent webcam and screen sharing",
      "Real-time video streaming",
      "Digital timestamp overlay",
      "Single RTCPeerConnection setup",
      "Host dashboard monitoring"
    ],
    github: "https://github.com/sudhin2002/Dual-Stream",
    live: "#",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Grow Kerala",
    description: "A digital platform focused on regional development, public engagement, and community-driven initiatives in Kerala.",
    tech: ["Angular", "Python", "Django", "PostgreSQL"],
    features: [
      "Community engagement platform",
      "Regional development initiatives",
      "Interactive user interface",
      "Backend data management"
    ],
    github: "https://github.com/sudhin2002/Grow-Kerala",
    live: "#",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative bg-gray-50/50 dark:bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills in frontend and backend development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col border border-gray-200 dark:border-white/10"
            >
              {/* Project Image with Gradient Overlay Hover */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Glowing Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors border border-white/30">
                        <Github size={18} />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-primary-600/80 hover:bg-primary-500 backdrop-blur-md rounded-full text-white transition-colors border border-primary-500/50 flex items-center gap-2">
                        <ExternalLink size={18} />
                        <span className="font-semibold text-sm">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-500 transition-colors">{project.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 flex-1">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-primary-500" /> Key Features
                  </h4>
                  <ul className="grid grid-cols-1 gap-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1.5">
                        <span className="text-primary-500">•</span>
                        <span className="truncate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase bg-gray-100 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 rounded border border-gray-200 dark:border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
