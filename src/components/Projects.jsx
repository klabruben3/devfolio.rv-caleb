import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with cart management, payment integration, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tags: ["React", "Tailwind", "Node.js", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "2D Platformer Game",
      description:
        "A retro-style platformer game with physics-based mechanics, collectibles, and multiple levels.",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
      tags: ["Godot", "GDScript", "Game Design"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Portfolio Dashboard",
      description:
        "Interactive analytics dashboard for visualizing project metrics and performance data.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["React", "Recharts", "TypeScript"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "IoT Weather Station",
      description:
        "Arduino-based weather monitoring system with real-time data visualization on a web dashboard.",
      image:
        "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80",
      tags: ["Arduino", "C++", "Web Sockets", "React"],
      github: "https://github.com",
      demo: null,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task manager with real-time updates, team features, and productivity analytics.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      tags: ["React", "Firebase", "Tailwind"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Data Visualization Tool",
      description:
        "MATLAB-based tool for analyzing and visualizing complex scientific datasets.",
      image:
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80",
      tags: ["MATLAB", "Python", "Data Science"],
      github: "https://github.com",
      demo: null,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Recent Work
            </span>
            <div className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mt-1"></div>
          </div>
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work spanning web development, game
            development, and hardware projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
