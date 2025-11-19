import { motion } from "motion/react";
import {
  Code2,
  Cpu,
  Database,
  Gamepad2,
  Layout,
  Terminal,
  FileSpreadsheet,
  Zap,
} from "lucide-react";

export function TechIcons() {
  const techStack = [
    { icon: Layout, name: "React", color: "text-cyan-400" },
    { icon: Code2, name: "JS", color: "text-yellow-400" },
    { icon: Terminal, name: "Python", color: "text-blue-400" },
    { icon: Gamepad2, name: "Godot", color: "text-purple-400" },
    { icon: Cpu, name: "C++", color: "text-pink-400" },
    { icon: Database, name: "MATLAB", color: "text-orange-400" },
    { icon: Zap, name: "Arduino", color: "text-green-400" },
    { icon: FileSpreadsheet, name: "MS Office", color: "text-blue-500" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-20"
    >
      <h3 className="mb-8 text-center">Tech Stack</h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-cyan-500/50 transition-all duration-300"
          >
            <tech.icon className={`h-8 w-8 ${tech.color}`} />
            <span className="text-sm text-muted-foreground">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
