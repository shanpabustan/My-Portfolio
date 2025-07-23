
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="card-gradient border-gradient rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

          
          <div className="flex space-x-4">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github size={16} /> Code
            </a>
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          </div>
        </div>
        
       <div className="relative">
        <motion.div 
            className="aspect-video overflow-hidden rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05 }}
        >
            <img 
            src={project.image} 
            alt="" 
            className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 rounded-2xl-to-br from-black/10 to-black/20"></div>
        </motion.div>
        <div className="absolute inset-0 rounded-2xl  ring-gray-300 dark:ring-gray-600 pointer-events-none"></div>
    </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;