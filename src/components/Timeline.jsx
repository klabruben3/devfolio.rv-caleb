import { motion } from "motion/react";
import { Calendar, Code, Rocket, Trophy } from "lucide-react";

export function Timeline() {
  const milestones = [
    {
      year: "2021",
      icon: Calendar,
      title: "Started Web Development Journey",
      description: "Began learning HTML, CSS, and JavaScript fundamentals",
      color: "text-blue-400",
    },
    {
      year: "2022",
      icon: Code,
      title: "Dove into React & Modern Frameworks",
      description: "Mastered React, began building complex web applications",
      color: "text-cyan-400",
    },
    {
      year: "2023",
      icon: Rocket,
      title: "Expanded into Game Development",
      description: "Learned Godot, C++, and game design principles",
      color: "text-purple-400",
    },
    {
      year: "2024-2025",
      icon: Trophy,
      title: "Full-Stack & Hardware Integration",
      description: "Combined skills in web, games, and hardware projects",
      color: "text-pink-400",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mb-20"
    >
      <h3 className="mb-12 text-center">Growth Timeline</h3>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 transform md:-translate-x-1/2" />

        {/* Milestones */}
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* Content */}
              <div
                className={`flex-1 ${
                  index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                } pl-16 md:pl-0`}
              >
                <div className="inline-block p-6 bg-card border border-border rounded-lg hover:border-cyan-500/50 transition-all duration-300">
                  <div
                    className={`inline-flex items-center gap-2 mb-2 ${milestone.color}`}
                  >
                    <milestone.icon className="h-5 w-5" />
                    <span>{milestone.year}</span>
                  </div>
                  <h4 className="mb-2">{milestone.title}</h4>
                  <p className="text-muted-foreground text-sm">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Circle marker */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transform -translate-x-1/2 border-4 border-background" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
