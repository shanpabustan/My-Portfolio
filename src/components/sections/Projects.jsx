import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-16 text-center gradient-text"
        >
          Projects
        </motion.h2>

        <div className="space-y-20">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
