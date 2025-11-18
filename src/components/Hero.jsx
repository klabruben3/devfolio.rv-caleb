import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "./ui/button";
import IntroAnimation from "../components/IntroAnimation";

export function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Animation */}
      <IntroAnimation />

      {/* Content */}
      <div className="absolute max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl mb-6">
            <span className="h-col">
              Building modern, intelligent, and expressive web experiences.
            </span>
          </h1>

          <div className="text-right border-right pr-2 mb-6">
            <p className="text-muted-foreground">
              Hey, I'm Ruben Caleb. I study Computer Science & Mathematics at
              North-West University and build fast, interactive web experiences,
              mostly with React.js, JavaScript, and C++. I care about clean UX,
              simple performance, and code that's easy to maintain. I love
              turning messy problems into clear, usable tools.
              <br />
              <br />
              Lately, I've been diving into game development with Godot and
              exploring Python projects, while keeping my web and C++ skills
              sharp through personal projects and prototypes.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
          >
            View Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="group border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
