import { motion } from "framer-motion";
import { Code2, Brain, Layers, Layout, Server, Database, Wrench, Users } from "lucide-react";

const categories = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
    ],
  },
  {
    title: "AI / Data Science",
    icon: Brain,
    skills: [
      { name: "Machine Learning", level: 88 },
      { name: "Deep Learning", level: 82 },
      { name: "NLP", level: 90 },
      { name: "Generative AI", level: 92 },
      { name: "Prompt Engineering", level: 88 },
    ],
  },
  {
    title: "AI Frameworks",
    icon: Layers,
    skills: [
      { name: "LangChain", level: 88 },
      { name: "LangGraph", level: 82 },
      { name: "CrewAI", level: 78 },
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "Angular", level: 75 },
      { name: "HTML/CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Spring Boot", level: 78 },
      { name: "FastAPI", level: 85 },
      { name: "Servlet", level: 70 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", level: 82 },
      { name: "Oracle", level: 72 },
      { name: "SQLite", level: 75 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Docker", level: 72 },
      { name: "AWS", level: 68 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Problem Solving", level: 92 },
      { name: "Teamwork", level: 90 },
      { name: "Communication", level: 85 },
      { name: "Agile", level: 82 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 neural-bg relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading gradient-text text-center">Skills & Tech Stack</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
          Technologies and tools I work with
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            className="glass-card-hover p-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.08, duration: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <cat.icon className="text-primary" size={18} />
              <h3 className="font-semibold text-sm text-foreground">{cat.title}</h3>
            </div>
            <div className="space-y-3">
              {cat.skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">{s.name}</span>
                    <span className="text-primary font-mono">{s.level}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-primary)" }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: ci * 0.08 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
