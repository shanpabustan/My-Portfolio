import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Code, Palette } from 'lucide-react';
import { personalInfo } from '../../data/personal';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textReveal = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
        
        {/* Floating Orbs - Monochrome */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gray-300/10 dark:bg-gray-600/10 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-gray-400/10 dark:bg-gray-500/10 rounded-full blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Sparkle Elements - Monochrome */}
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="absolute top-1/4 right-1/4 text-gray-400/40 dark:text-gray-500/40"
        >
          <Sparkles size={24} />
        </motion.div>
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="absolute bottom-1/4 left-1/4 text-gray-300/40 dark:text-gray-600/40"
          style={{ animationDelay: '2s' }}
        >
          <Code size={20} />
        </motion.div>
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="absolute top-1/2 left-1/6 text-gray-500/40 dark:text-gray-400/40"
          style={{ animationDelay: '1s' }}
        >
          <Palette size={18} />
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity, scale, y }}
        className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl w-full relative z-10"
      >
        
        {/* LEFT SIDE: Enhanced Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-8">
          
          

          {/* Main Title with Enhanced Typography */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-none"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent drop-shadow-2xl">
              {personalInfo.name.split(' ')[0]}
            </span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              {personalInfo.name.split(' ').slice(1).join(' ')}
            </motion.span>
          </motion.h1>

          {/* Enhanced Description */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-2xl">
              {personalInfo.title}
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              {personalInfo.description}
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.a 
              href="#projects" 
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px -12px rgba(0,0,0,0.25)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gray-800 dark:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-2">
                View My Work
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </div>
            </motion.a>
            
            <motion.a 
              href="/resume.pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Enhanced Profile Photo */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={textReveal}
          className="flex-1 flex justify-center lg:justify-end relative"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="relative"
          >
            {/* Glowing Ring - Monochrome */}
            <div className="absolute -inset-4 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-700 rounded-full blur-lg opacity-20 animate-pulse" />
            
            {/* Photo Container */}
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
              }}
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 border-4 border-white dark:border-gray-700"
            >
              <motion.img
                src={personalInfo.image}
                alt="Profile"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
            
            {/* Status Badge - Monochrome */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 300 }}
              className="absolute -bottom-4 -right-4 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold rounded-full shadow-lg flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse" />
              Available for work
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;