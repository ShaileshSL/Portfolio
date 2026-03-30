import { motion } from "framer-motion";
import { Bot, Code2, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Development",
    items: ["AI Chatbot Development", "Generative AI Applications", "NLP Solutions"],
  },
  {
    icon: Code2,
    title: "Development",
    items: ["Full Stack Development", "API Development", "Backend Systems"],
  },
  {
    icon: BarChart3,
    title: "Machine Learning",
    items: ["ML Model Development", "Data Analysis", "AI Automation Solutions"],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading gradient-text text-center">Services</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
          What I can do for you
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="glass-card-hover gradient-border p-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <s.icon className="text-primary" size={26} />
            </div>
            <h3 className="font-semibold text-foreground mb-4">{s.title}</h3>
            <ul className="space-y-2">
              {s.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
