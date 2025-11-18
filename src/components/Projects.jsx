import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";

// Assets
import devfolio from "../assets/project_media/devfolio.png";
import cleanChase from "../assets/project_media/clean_chase.png";
import fastNote from "../assets/project_media/fastnote_2.0.png";
import pixelKombat from "../assets/project_media/pixel_kombat.png";
import ratingComponent from "../assets/project_media/rating-component.png";
import cv from "../assets/doc/Ruben_Caleb_SoftwareDeveloper_CV.pdf";

export function Projects() {
  const projects = [
    {
      title: "Ruben Caleb | Devfolio",
      description:
        "A fully custom developer portfolio built using React.js and Vite, styled with Tailwind CSS and enhanced with shadcn/ui components.",
      image: devfolio,
      tags: ["ReactJs", "JavaScript", "Tailwind", "Canvas API", "Web workers"],
      github: null,
      demo: "https://klabruben3.github.io/devfolio.rv-caleb/",
    },
    {
      title: "Clean Chase",
      description:
        "Minimal JavaScript animation that simulates a chain of circles following a randomly moving target across the canvas",
      image: cleanChase,
      tags: ["HTML5", "CSS3", "Javascript", "Canvas API"],
      github: "https://github.com/klabruben3/clean-chase",
      demo: "https://klabruben3.github.io/clean-chase/",
    },
    {
      title: "Pixel Kombat",
      description:
        "A retro-inspired arcade maze game that reimagines the spirit of Pac-Man with modern twists and smooth gameplay",
      image: pixelKombat,
      tags: ["C++", "SFML", "Game Design"],
      github: "https://github.com/klabruben3/Pixel-Kombat/tree/main/genesis",
      demo: null,
    },
    {
      title: "FastNote 2.0",
      description:
        "A minimal interactive task manager built with pure JavaScript, HTML, and CSS to organize and track daily goals",
      image: fastNote,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/klabruben3/FastNote-2.0",
      demo: "https://klabruben3.github.io/FastNote-2.0/src",
    },
    {
      title: "Rating Component",
      description:
        "A clean and engaging user interface that collects feedback through a smooth, intuitive two-step interaction process",
      image: ratingComponent,
      tags: ["HTML", "CSS"],
      github: "https://github.com/klabruben3/interactive-rating-component",
      demo: "https://klabruben3.github.io/interactive-rating-component/",
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
      <div className="max-w-7xl mx-auto">
        <ul className="flex gap-8 mt-6">
          <li className="relative text-muted-foreground hover:text-foreground transition-colors duration-200 group">
            <a href={cv} target="_blank" rel="noopener noreferrer">
              Download my CV
            </a>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="relative text-muted-foreground hover:text-foreground transition-colors duration-200 group">
            <a
              href="https://github.com/klabruben3?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all projects
            </a>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </li>
        </ul>
      </div>
    </section>
  );
}
