import { motion } from "motion/react";
import { Skills } from "./Skills";
import { Timeline } from "./Timeline";
import { TechIcons } from "./TechIcons";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              About Me
            </span>
            <div className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mt-1"></div>
          </div>

          <h2 className="mb-8">My Journey into Development</h2>

          <div className="space-y-6 text-muted-foreground max-w-4xl">
            <p>
              My journey into development began with curiosity and a desire to
              create. What started as tinkering with basic HTML pages evolved
              into a passion for building complex, intelligent applications that
              solve real-world problems.
            </p>
            <p>
              From crafting pixel-perfect user interfaces to developing game
              mechanics in Godot, and experimenting with hardware using Arduino,
              I've always been driven by the thrill of bringing ideas to life
              through code. Each project teaches me something new, and every
              challenge is an opportunity to grow.
            </p>
            <p>
              Today, I focus on creating modern web experiences that are not
              just functional, but beautiful, accessible, and intuitive. I
              believe that great software should feel magical to use while being
              built on solid engineering principles.
            </p>
          </div>
        </motion.div>

        {/* Tech Icons Section */}
        <TechIcons />

        {/* Skills Section */}
        <Skills />

        {/* Timeline Section */}
        <Timeline />
      </div>
    </section>
  );
}
