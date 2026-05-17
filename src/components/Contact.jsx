import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.4) 1px, transparent 0)', backgroundSize: '32px 32px' }}>
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto glass-card rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10 flex flex-col lg:flex-row relative">
          
          {/* Vertical Glowing Divider */}
          <div className="hidden lg:block absolute left-[40%] top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-primary-500 to-transparent opacity-50 z-20"></div>

          {/* Left Side: Contact Info */}
          <div className="w-full lg:w-[40%] p-10 md:p-14 bg-white/40 dark:bg-gray-900/40 relative z-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-bold tracking-wider">
                LET'S CONNECT
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500">Touch</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg leading-relaxed">
                Have a project in mind or looking for a passionate developer? Let's connect and build something amazing together.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center text-primary-500 group-hover:scale-110 group-hover:shadow-primary-500/20 transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">Email</h4>
                    <a href="mailto:sudhin.k2002@gmail.com" className="text-lg font-bold text-gray-900 dark:text-white hover:text-primary-500 transition-colors">
                      sudhin.k2002@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center text-purple-500 group-hover:scale-110 group-hover:shadow-purple-500/20 transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">Location</h4>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">
                      Kochi, Kerala, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <SocialIcon href="https://www.linkedin.com/in/sudhin-k" icon={<Linkedin size={20} />} color="group-hover:text-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] border-blue-500/30" />
                <SocialIcon href="https://github.com/sudhin2002" icon={<Github size={20} />} color="group-hover:text-gray-900 dark:group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] border-gray-500/30" />
                <SocialIcon href="#" icon={<Instagram size={20} />} color="group-hover:text-pink-500 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] border-pink-500/30" />
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-[60%] p-10 md:p-14 bg-white/20 dark:bg-black/20 backdrop-blur-md relative z-10">
            <motion.form 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <InputGroup id="name" label="Your Name" type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                <InputGroup id="email" label="Your Email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
              
              <InputGroup id="subject" label="Subject" type="text" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} />
              
              <div className="relative group">
                <textarea 
                  id="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-5 py-4 bg-white/50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all peer resize-none text-gray-900 dark:text-white shadow-inner"
                  placeholder=" "
                ></textarea>
                <label htmlFor="message" className="absolute left-5 top-4 text-gray-500 dark:text-gray-400 transition-all peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-primary-500 peer-focus:text-white peer-focus:px-2 peer-focus:rounded-full peer-valid:-top-3 peer-valid:left-4 peer-valid:text-xs peer-valid:bg-gray-800 peer-valid:text-white peer-valid:px-2 peer-valid:rounded-full cursor-text pointer-events-none">
                  Message
                </label>
              </div>

              <button 
                type="submit"
                className="mt-4 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-white font-bold text-lg transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:-translate-y-1 flex items-center justify-center gap-3 group w-full md:w-auto md:self-end"
              >
                Send Message
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.form>
          </div>

        </div>
      </div>
    </section>
  );
};

const InputGroup = ({ id, label, type, value, onChange }) => (
  <div className="relative group">
    <input 
      type={type} 
      id={id}
      required
      value={value}
      onChange={onChange}
      className="w-full px-5 py-4 bg-white/50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all peer text-gray-900 dark:text-white shadow-inner"
      placeholder=" "
    />
    <label htmlFor={id} className="absolute left-5 top-4 text-gray-500 dark:text-gray-400 transition-all peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-primary-500 peer-focus:text-white peer-focus:px-2 peer-focus:rounded-full peer-valid:-top-3 peer-valid:left-4 peer-valid:text-xs peer-valid:bg-gray-800 peer-valid:text-white peer-valid:px-2 peer-valid:rounded-full cursor-text pointer-events-none">
      {label}
    </label>
  </div>
);

const SocialIcon = ({ href, icon, color }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`w-12 h-12 rounded-full border bg-white/50 dark:bg-gray-800/50 flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all duration-300 group ${color}`}
  >
    {icon}
  </a>
);

export default Contact;
