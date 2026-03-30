import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Assistant System Engineer",
    company: "Tata Consultancy Services (TCS)",
    period: "Apr 2025 – Present",
    points: [
      "Developing AI-powered chatbots with NLP and intent detection",
      "Building REST API integrations for enterprise systems",
      "Implementing Generative AI workflows using LangChain & LangGraph",
      "Applying ML/DL models for response optimization",
      "Debugging, optimizing, and deploying AI solutions",
      "Collaborating in Agile development teams",
    ],
  },
  {
    role: "Internship – Sentiment Analysis",
    company: "TCS-iON",
    period: "Internship",
    points: [
      "Built NLP preprocessing pipelines for text data",
      "Developed ML models for sentiment classification",
      "Created data visualization dashboards",
      "Performed feedback analysis and reporting",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 relative">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading gradient-text text-center">Experience</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
          Professional journey so far
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className={`relative flex flex-col md:flex-row gap-6 mb-12 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_hsl(199_89%_48%/0.5)] z-10" />

            <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
              <div className="glass-card-hover p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="text-primary" size={16} />
                  <span className="text-xs font-mono text-primary">{exp.period}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{exp.role}</h3>
                <p className="text-sm text-muted-foreground mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="text-primary mt-0.5 shrink-0" size={14} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
