import { Github, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border/50">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-center md:text-left">
        <p className="font-semibold text-foreground">Shailesh Lokhande</p>
        <p className="text-xs text-muted-foreground">AI Engineer</p>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/ShaileshSL"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github size={18} />
        </a>
        <a
          href="mailto:shaileshlokhande860@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail size={18} />
        </a>
      </div>
      <p className="text-xs text-muted-foreground">© 2026 Shailesh Lokhande. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
