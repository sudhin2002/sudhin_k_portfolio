import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Smartphone, Database, Zap, Server } from 'lucide-react';

const aboutFeatures = [
  {
    icon: <GraduationCap size={24} className="text-blue-500" />,
    title: "MCA Graduate",
    desc: "Master's degree in Computer Applications with a strong foundation in computer science principles.",
    color: "from-blue-500/20 to-transparent",
    borderColor: "border-blue-500/30",
    shadow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
  },
  {
    icon: <Code2 size={24} className="text-primary-500" />,
    title: "Full Stack Development",
    desc: "Building seamless, scalable web applications from frontend to backend.",
    color: "from-primary-500/20 to-transparent",
    borderColor: "border-primary-500/30",
    shadow: "hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
  },
  {
    icon: <Server size={24} className="text-purple-500" />,
    title: "Backend APIs",
    desc: "Designing secure RESTful APIs with Python and Django for data exchange.",
    color: "from-purple-500/20 to-transparent",
    borderColor: "border-purple-500/30",
    shadow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-gray-950">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.4) 1px, transparent 0)', backgroundSize: '32px 32px' }}>
      </div>
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-primary-600/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Left Side: Visuals */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full relative"
          >
            <div className="relative w-full h-[500px] lg:h-[540px] max-w-[480px] mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 to-purple-500/30 rounded-3xl blur-2xl transform rotate-3"></div>
              
              <div className="relative h-full w-full bg-white/10 dark:bg-gray-900/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
                {/* Terminal Header */}
                <div className="bg-gray-200/50 dark:bg-black/50 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-xs font-mono text-gray-500 dark:text-gray-400">developer.py</span>
                </div>
                
                {/* Code Body */}
                <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-hidden flex-1 relative">
                  <div className="text-gray-400 dark:text-gray-500 mb-2">1 &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">class</span> <span className="text-blue-600 dark:text-blue-400">SudhinK</span>:</div>
                  <div className="text-gray-400 dark:text-gray-500 mb-2">2 &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">def</span> <span className="text-blue-600 dark:text-blue-400">__init__</span>(<span className="text-orange-600 dark:text-orange-400">self</span>):</div>
                  <div className="text-gray-400 dark:text-gray-500 mb-2">3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">self</span>.role = <span className="text-green-600 dark:text-green-400">"Full Stack Developer"</span></div>
                  <div className="text-gray-400 dark:text-gray-500 mb-2">4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">self</span>.passion = <span className="text-green-600 dark:text-green-400">"Scalable apps"</span></div>
                  <div className="text-gray-400 dark:text-gray-500 mb-2">5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">self</span>.stack = [<span className="text-green-600 dark:text-green-400">"Python"</span>, <span className="text-green-600 dark:text-green-400">"Django"</span>, <span className="text-green-600 dark:text-green-400">"Flutter"</span>]</div>
                  <div className="text-gray-400 dark:text-gray-500 mb-2">6 </div>
                  <div className="text-gray-400 dark:text-gray-500 mb-2">7 &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">def</span> <span className="text-blue-600 dark:text-blue-400">run</span>(<span className="text-orange-600 dark:text-orange-400">self</span>):</div>
                  <div className="text-gray-400 dark:text-gray-500 mb-2">8 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">while</span> <span className="text-blue-600 dark:text-blue-400">True</span>:</div>
                  <div className="text-gray-400 dark:text-gray-500 mb-2">9 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">self</span>.learn()</div>
                  <div className="text-gray-400 dark:text-gray-500 mb-2">10 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">self</span>.build()</div>
                  
                  {/* Blinking Cursor */}
                  <motion.div 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="w-2 h-4 bg-primary-500 absolute bottom-6 left-12"
                  ></motion.div>
                </div>
              </div>

              {/* Floating Element */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3 z-10"
              >
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-500 font-bold text-lg">
                  3+
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">Projects</div>
                  <div className="text-[10px] text-gray-500">Completed</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[580px] mx-auto lg:mx-0 flex flex-col justify-center pt-4 lg:pt-2"
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-bold tracking-wider self-start">
              ABOUT ME
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              Passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500">Full Stack & Mobile Developer</span>
            </h2>
            
            <div className="space-y-5 text-gray-600 dark:text-gray-400 text-[15px] xl:text-base mb-10 leading-relaxed pr-4">
              <p>
                I am an <strong className="text-gray-900 dark:text-white font-semibold">MCA graduate</strong> with a deep passion for software development.
              </p>
              <p>
                My expertise lies in <span className="text-primary-500 font-medium">Python, SQL, REST APIs, Django, Flutter, and JavaScript</span>, enabling me to build scalable full stack web and mobile applications.
              </p>
              <p>
                I enjoy backend engineering, API development, and solving real-world problems through technology. I continuously explore modern frameworks and tools to improve my development skills and create impactful digital experiences.
              </p>
            </div>

            {/* Premium 3-Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {aboutFeatures.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`p-4 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm border ${feature.borderColor} shadow-sm transition-all duration-300 hover:-translate-y-1 ${feature.shadow} relative overflow-hidden group h-full min-h-[180px]`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative z-10 flex flex-col h-full justify-start">
                    <div className="mb-4 bg-white dark:bg-gray-800 w-10 h-10 rounded-xl flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-700 group-hover:scale-110 transition-transform duration-300 shrink-0">
                      {feature.icon}
                    </div>
                    <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                    <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
