import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, Instagram } from "lucide-react";

const socials = [
  { Icon: Github, href: "https://github.com/sudhanshuagasti588", label: "GitHub" },
  {
    Icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  { Icon: Mail, href: "mailto:sudhanshuagasti588@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16 px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-display text-2xl font-bold tracking-tight">Sudhanshu Kumar Agasti</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Full Stack Developer (MERN) · Building clean, responsive, and scalable web solutions !!
          </p>
        </div>
        <div className="flex items-center gap-3">
          {socials.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              whileHover={{ y: -4, scale: 1.05 }}
              className="glass grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon size={16} />
            </motion.a>
          ))}
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-2 grid h-11 w-11 place-items-center rounded-full bg-white text-black transition-transform hover:scale-110"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl items-center justify-between border-t border-white/5 pt-6 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Sudhanshu Kumar Agasti. All rights reserved.</p>
        <p className="font-mono">Made with React · GSAP · Framer Motion</p>
      </div>
    </footer>
  );
}
