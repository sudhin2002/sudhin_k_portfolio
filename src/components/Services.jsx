import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, Smartphone, Puzzle } from 'lucide-react';

const servicesData = [
  {
    title: "Web Development",
    description: "Building responsive, modern, and highly interactive websites using React, Tailwind CSS, and vanilla JS.",
    icon: <Globe size={32} />
  },
  {
    title: "Backend Development",
    description: "Creating robust and scalable server-side architectures, databases, and logic using Python and Django.",
    icon: <Server size={32} />
  },
  {
    title: "Mobile App Development",
    description: "Developing cross-platform mobile applications for iOS and Android using Flutter.",
    icon: <Smartphone size={32} />
  },
  {
    title: "API Integration",
    description: "Designing and integrating secure RESTful APIs to connect various services and frontends.",
    icon: <Puzzle size={32} />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Services</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions to help bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
