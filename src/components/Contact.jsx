import { useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock form submission
    if (formData.name && formData.email && formData.message) {
      toast.success("Message sent successfully!", {
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Please fill in all fields");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/klabruben3",
      color: "hover:text-cyan-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ruben-caleb-b5243326b/",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:klabruben@gmail.com",
      color: "hover:text-purple-400",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Get In Touch
            </span>
            <div className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mt-1"></div>
          </div>
          <h2 className="mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 bg-card border-border focus:border-cyan-500 transition-colors"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 bg-card border-border focus:border-cyan-500 transition-colors"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 min-h-[150px] bg-card border-border focus:border-cyan-500 transition-colors resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-6">Connect with me</h3>
            <p className="text-muted-foreground mb-8">
              Find me on these platforms or drop me an email. I'm always open to
              discussing new projects, creative ideas, or opportunities.
            </p>

            <div className="space-y-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className={`flex items-center gap-4 p-4 bg-card border border-border rounded-lg transition-all duration-300 hover:border-cyan-500/50 ${link.color}`}
                >
                  <link.icon className="h-6 w-6" />
                  <div>
                    <div className="font-medium">{link.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {link.url.replace("https://", "").replace("mailto:", "")}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground"
        >
          <p>
            © 2025 Ruben Caleb. Built with React, Tailwind CSS, and passion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
