import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../../data/personal';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center gradient-text">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {personalInfo.about.map((paragraph, index) => (
                <p key={index} className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
              
              <div className="flex items-center gap-2 mb-6 text-gray-600 dark:text-gray-400">
                <MapPin size={18} />
                <span>{personalInfo.location}</span>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <motion.div 
                className="w-80 h-[500px] card-gradient rounded-lg overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={personalInfo.image2} 
                  alt="Profile"
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;