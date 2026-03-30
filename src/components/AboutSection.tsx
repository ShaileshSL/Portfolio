import { motion } from "framer-motion";
import { GraduationCap, Target, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 variants={fadeUp} custom={0} className="section-heading gradient-text text-center">
          About Me
        </motion.h2>
        <motion.p variants={fadeUp} custom={0} className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
          Driven by curiosity in AI & intelligent systems
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div variants={fadeUp} custom={1} className="glass-card p-6 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Target className="text-primary" size={22} />
              <h3 className="text-lg font-semibold text-foreground">Professional Summary</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              AI Engineer with a strong foundation in Generative AI, Natural Language Processing,
              Machine Learning, and Deep Learning. Currently working as an Assistant System Engineer
              at Tata Consultancy Services, developing AI-powered chatbots and scalable intelligent
              applications. Committed to leveraging cutting-edge AI technologies to solve real-world
              problems.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} custom={2} className="glass-card p-6 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="text-secondary" size={22} />
              <h3 className="text-lg font-semibold text-foreground">Career Objective</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              To contribute to the advancement of Artificial Intelligence and Generative AI by
              building innovative, intelligent systems. Passionate about exploring new AI frameworks,
              prompt engineering, and multi-agent architectures to create impactful solutions.
            </p>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div variants={fadeUp} custom={3} className="mt-12 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <GraduationCap className="text-primary" size={22} />
            <h3 className="text-xl font-semibold text-foreground">Education</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card-hover p-6">
              <div className="text-xs font-mono text-primary mb-2">2020 – 2024</div>
              <h4 className="font-semibold text-foreground mb-1">B.Tech Computer Science</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Tatyasaheb Kore Institute of Engineering & Technology
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono">
                CGPA: 8.83
              </span>
            </div>
            <div className="glass-card-hover p-6">
              <div className="text-xs font-mono text-primary mb-2">HSC</div>
              <h4 className="font-semibold text-foreground mb-1">Higher Secondary</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Vivekanand College, Kolhapur
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-mono">
                79%
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
