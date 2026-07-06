import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import logoImg from "@/assets/logo.jpg";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      >
        <div className="relative w-full max-w-5xl flex justify-center">
          <nav
            className={`glass w-full flex items-center justify-between gap-1 rounded-full px-3 py-1.5 transition-all duration-500 sm:px-4 ${scrolled ? "glow-violet" : ""}`}
          >
            <a
              href="#top"
              className="flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold tracking-tight sm:px-3 sm:py-1.5 sm:text-sm"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative flex items-center justify-center">
                <img
                  src={logoImg}
                  alt="S Agasti Logo"
                  className="h-9 w-9 md:h-12 md:w-12 rounded-full object-cover border-2 border-white glow-white"
                />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-0.5 sm:gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="relative rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Desktop Let's Talk Button */}
            <a
              href="#contact"
              className="hidden md:block ml-1 rounded-full bg-white/95 px-4 py-1.5 text-sm font-medium text-black transition-transform hover:scale-105"
            >
              Let's Talk !!
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black md:hidden hover:bg-zinc-200 transition-colors shadow-[0_0_15px_-3px_rgba(255,255,255,0.4)]"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </nav>

          {/* Mobile Dropdown Menu Drawer */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute top-full left-0 right-0 mt-2 bg-black/95 border border-white/15 rounded-3xl p-4 flex flex-col gap-2 md:hidden glow-violet z-40"
              >
                {links.map((l, index) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={l.href}
                    href={l.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:text-white hover:bg-white/10"
                  >
                    {l.label}
                  </motion.a>
                ))}
                <motion.a
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: links.length * 0.05 }}
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 rounded-xl bg-white text-center py-3 text-sm font-bold text-black transition-transform active:scale-95 shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]"
                >
                  Let's Talk !!
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[var(--neon-violet)] via-[var(--neon-cyan)] to-[var(--neon-pink)]"
      />
    </>
  );
}
