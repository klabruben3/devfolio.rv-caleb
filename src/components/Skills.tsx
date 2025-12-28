"use client";

import { motion } from "motion/react";
import { useRef, useEffect } from "react";
import type { CSSProperties } from "react";

function Skills() {
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const catStyles: CSSProperties = {
    backgroundColor: "#22222269",
    padding: "10px 15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };
  const skillsByIndustry = {
    "Front-End Web Development": [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Tailwind CSS", level: 88 },
    ],
    "Game Development": [
      { name: "Godot", level: 75 },
      { name: "SFML", level: 70 },
      { name: "C++", level: 72 },
      { name: "Game Design", level: 80 },
    ],
    "Productivity / Microsoft Apps": [
      { name: "Excel", level: 92 },
      { name: "Word", level: 95 },
      { name: "PowerPoint", level: 90 },
      { name: "Outlook", level: 88 },
      { name: "Data Analysis", level: 85 },
    ],
    "Other Technical Skills": [
      { name: "MATLAB", level: 78 },
      { name: "Python", level: 82 },
      { name: "Arduino", level: 75 },
      { name: "Hardware Integration", level: 70 },
      { name: "Scripting", level: 85 },
    ],
  };

  const handleClick = (button: HTMLButtonElement) => {
    button.style.borderStyle = "solid";
    button.style.borderWidth = "2px";
  };

  useEffect(() => {
    const buttons = buttonsRef.current;

    buttons.forEach((button) => {
      if (!button) return;
      button.addEventListener("click", () => {
        handleClick(button);

        window.addEventListener("click", (e) => {
          console.log(e.target);
        });
      });

      button.addEventListener("mouseenter", () => {
        button.style.color = "white";

        button.addEventListener("mouseleave", () => {
          button.style.color = "";
        });
      });
    });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div style={catStyles}>
        {Object.keys(skillsByIndustry).map((industry, i) => (
          <button
            key={industry}
            ref={(el) => {
              buttonsRef.current[i] = el;
            }}
            className="h-[300px] text-muted-foreground bg-[#0000007e] px-[10px] border border-dashed border-[orangered]"
          >
            {industry}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
