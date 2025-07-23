import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { skillCategories } from '../../data/skills';
import { useTheme } from '../../context/ThemeContext';
import { Code2, Database, Palette, Wrench, Star, ArrowRight } from 'lucide-react';

const Skills = () => {
  const { theme } = useTheme();

  // Category icons mapping
  const categoryIcons = {
    'Frontend': Code2,
    'Backend': Database,
    'Design': Palette,
    'Tools': Wrench,
    'Programming Languages': Code2,
    'Frameworks': Star,
    'Technologies': Wrench,
    'Other': ArrowRight
  };

  // Categories that should be centered when they have fewer items
  const centeredCategories = ['Frameworks', 'Languages', 'Tools & Libraries', 'Programming Languages'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  };

  const SkillCard = ({ skill, index }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
    const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

    const handleMouseMove = (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(event.clientX - centerX);
      mouseY.set(event.clientY - centerY);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    return (
      <motion.div
        variants={skillVariants}
        custom={index}
        whileHover={{ 
          scale: 1.08,
          zIndex: 10
        }}
        whileTap={{ scale: 0.95 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="group relative"
      >
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-800 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        
        {/* Main card */}
        <div
          className={`
            relative rounded-xl p-4 text-center transition-all duration-300 cursor-pointer border-2 w-32 h-24 flex items-center justify-center backdrop-blur-sm
            ${theme === 'dark'
              ? 'bg-gray-900/80 border-gray-800 hover:border-gray-600 hover:bg-gray-800/90'
              : 'bg-white/80 border-gray-200 hover:border-gray-400 hover:bg-gray-50/90 shadow-lg hover:shadow-xl'}
          `}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/10 to-transparent dark:via-gray-700/10"
              animate={{
                x: [-100, 200],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 2
              }}
            />
          </div>

          {/* Skill name */}
          <span 
            className="relative text-sm font-semibold text-gray-800 dark:text-gray-200 z-10"
            style={{
              transform: "translateZ(20px)"
            }}
          >
            {skill.name}
          </span>

          {/* Hover indicator */}
          <motion.div
            className="absolute bottom-1 right-1 w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" key={theme} className="py-24 px-6 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 bg-gray-200/20 dark:bg-gray-700/20 rounded-full blur-xl"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-16 h-16 bg-gray-300/20 dark:bg-gray-600/20 rounded-full blur-xl"
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-lg mb-8"
          >
            <Code2 size={20} className="text-gray-600 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Technical Arsenal
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Skills &
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive collection of tools, frameworks, and technologies I've mastered to create exceptional digital experiences.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = categoryIcons[category.category] || Code2;
            const shouldCenter = centeredCategories.includes(category.category);
            
            return (
              <motion.div 
                key={category.category}
                variants={categoryVariants}
                className="relative"
              >
                {/* Category Header */}
                <div className="text-center mb-12">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.1,
                      type: "spring",
                      stiffness: 200 
                    }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-3 mb-4"
                  >
                    <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                      <IconComponent size={24} className="text-gray-600 dark:text-gray-400" />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                    {category.category}
                  </h3>
                  
                  <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-800 rounded-full mx-auto" />
                </div>

                {/* Skills Grid */}
                <motion.div
                  className={shouldCenter 
                    ? "flex flex-wrap justify-center gap-4"
                    : "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
                  }
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.05
                      }
                    }
                  }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard 
                      key={skill.name}
                      skill={skill}
                      index={skillIndex}
                    />
                  ))}
                </motion.div>

                {/* Category separator line */}
                {categoryIndex < skillCategories.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mt-20"
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            Always learning and expanding my skill set
          </p>
          <motion.div
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-500"
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <span className="text-sm font-medium ml-2">More to come</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;