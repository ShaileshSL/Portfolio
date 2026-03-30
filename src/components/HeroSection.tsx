import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Download, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const titles = [
  "AI Engineer",
  "Generative AI Developer",
  "NLP Engineer",
  "Full Stack Developer",
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, titleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center neural-bg relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-mono text-sm mb-3">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Shailesh Shashikant{" "}
              <span className="gradient-text">Lokhande</span>
            </h1>
            <div className="h-10 mb-6">
              <span className="text-xl md:text-2xl text-muted-foreground font-mono">
                {text}
                <span className="border-r-2 border-primary animate-typing-cursor ml-0.5">
                  &nbsp;
                </span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Assistant System Engineer at TCS with experience in AI-powered chatbot development,
              Generative AI, NLP, ML, and DL. Passionate about building intelligent and scalable
              applications.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#contact" className="glow-button inline-flex items-center gap-2 rounded-lg">
                <Mail size={18} /> Contact Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary/50 text-foreground transition-all duration-300 hover:shadow-[0_0_15px_hsl(199_89%_48%/0.15)]"
              >
                <Download size={18} /> Resume
              </a>
              <a
                href="https://github.com/ShaileshSL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary/50 text-foreground transition-all duration-300 hover:shadow-[0_0_15px_hsl(199_89%_48%/0.15)]"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden gradient-border animate-pulse-glow">
                <img
                  src={profileImg}
                  alt="Shailesh Lokhande"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 glass-card px-4 py-2 text-xs font-mono text-primary animate-float">
                &lt;AI Engineer /&gt;
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
