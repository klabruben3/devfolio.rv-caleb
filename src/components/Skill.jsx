import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { AnalyticsCharts } from "./AnalyticsCharts";

export function Skill() {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mb-20"
    >
      <h3 className="mb-8 text-center">Skills & Expertise</h3>

      <Tabs defaultValue="Front-End Web Development" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 tab">
          {Object.keys(skillsByIndustry).map((industry) => (
            <TabsTrigger
              key={industry}
              value={industry}
              className="text-wrap"
              style={{
                backgroundImage: "linear-gradient(to right, black, orangered)",
              }}
            >
              {industry}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            style={{
              border: " 1px dashed orangered",
              padding: 20,
              borderRadius: 20,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {Object.entries(skillsByIndustry).map(([industry, skills]) => (
              <TabsContent key={industry} value={industry} className="mt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Skill List */}
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div
                          className="h-2 rounded-full overflow-hidden"
                          style={{ backgroundColor: "#22222269" }}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: index * 0.1 + 0.2,
                            }}
                            className="h-full"
                            style={{
                              border: "2px solid orangered",
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  {/* Chart Visualization */}
                  <div className="flex items-center justify-center">
                    <AnalyticsCharts skills={skills} />
                  </div>
                </div>
              </TabsContent>
            ))}
          </motion.div>
          <motion.div
            style={{
              border: " 1px dashed orangered",
              padding: 20,
              borderRadius: 20,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {Object.entries(skillsByIndustry).map(([industry, skills]) => (
              <TabsContent key={industry} value={industry} className="mt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Skill List */}
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div
                          className="h-2 rounded-full overflow-hidden"
                          style={{ backgroundColor: "#22222269" }}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: index * 0.1 + 0.2,
                            }}
                            className="h-full"
                            style={{
                              border: "2px solid orangered",
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  {/* Chart Visualization */}
                  <div className="flex items-center justify-center">
                    <AnalyticsCharts skills={skills} />
                  </div>
                </div>
              </TabsContent>
            ))}
          </motion.div>
        </div>
      </Tabs>
    </motion.div>
  );
}
