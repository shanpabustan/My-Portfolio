import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';


const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Let's Work Together
        </motion.h2>

        <p className="text-xl text-gray-700 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear about it. Let's create something amazing together.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="mailto:john@example.com"
            className="bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors font-medium flex items-center justify-center gap-2"
          >
            <Mail size={20} /> Send Email
          </a>
          <a
            href="https://linkedin.com"
            className="border border-gray-300 dark:border-gray-600 px-8 py-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors font-medium flex items-center justify-center gap-2 text-gray-900 dark:text-white"
          >
            <Linkedin size={20} /> Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
