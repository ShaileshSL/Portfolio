import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Market Research Automation",
    desc: "Multi-agent AI research system using CrewAI with dedicated research, analysis, and report generation agents for automated market insights.",
    tech: ["CrewAI", "Python", "LangChain", "NLP"],
    github: "https://github.com/ShaileshSL",
  },
  {
    title: "AI Chatbot Project",
    desc: "Intelligent NLP chatbot with API integration, intent detection, and response optimization for enterprise use cases.",
    tech: ["Python", "NLP", "FastAPI", "LangChain"],
    github: "https://github.com/ShaileshSL",
  },
  {
    title: "Sentiment Analysis System",
    desc: "End-to-end NLP pipeline for text processing, ML classification, and feedback analysis with visualization dashboards.",
    tech: ["Python", "ML", "NLP", "Data Viz"],
    github: "https://github.com/ShaileshSL",
  },
  {
    title: "Car Recommendation System",
    desc: "Full-stack recommendation engine with Angular frontend, Python backend, and SQL database for personalized car suggestions.",
    tech: ["Angular", "Python", "MySQL", "ML"],
    github: "https://github.com/ShaileshSL",
  },
  {
    title: "Malpractice Detection System",
    desc: "Computer vision-based CCTV monitoring system for behavior detection and real-time alert generation.",
    tech: ["Computer Vision", "Python", "Deep Learning"],
    github: "https://github.com/ShaileshSL",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 neural-bg relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading gradient-text text-center">Projects</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
          Featured work & portfolio highlights
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="glass-card-hover p-6 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <ExternalLink className="text-primary" size={18} />
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
            <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
