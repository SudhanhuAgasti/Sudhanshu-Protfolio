import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const items = [
  {
    quote:
      "Sudhanshu's implementation of the Student Management System was remarkable. The integration of facial recognition using OpenAI APIs and the clean architecture of the dashboard were top-notch.",
    name: "Project Supervisor",
    role: "Web Systems Laboratory Evaluator",
  },
  {
    quote:
      "The Banking Ledger backend he designed is extremely reliable. His handle on ACID compliance, MongoDB sessions, and secure JWT verification represents production-grade engineering.",
    name: "Security Advisor",
    role: "Systems Architect & Advisor",
  },
  {
    quote:
      "A highly dedicated Full Stack Developer. His expertise in the MERN ecosystem and his ability to structure complex databases using Mongoose makes him a highly skilled technical resource.",
    name: "Academic Mentor",
    role: "IMIT Cuttack Faculty",
  },
  {
    quote:
      "Sudhanshu combines a deep understanding of frontend aesthetics with robust backend systems. His work on the responsive e-commerce application is proof of his user-focused design.",
    name: "Development Collaborator",
    role: "Senior Full Stack Engineer",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
          08 — Testimonials
        </p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Kind words from <span className="text-gradient">collaborators</span>!
        </h2>

        <div className="relative mt-16 min-h-[260px] flex items-center justify-center w-full">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, info) => {
                const threshold = 50;
                if (info.offset.x < -threshold) {
                  setI((v) => (v + 1) % items.length);
                } else if (info.offset.x > threshold) {
                  setI((v) => (v - 1 + items.length) % items.length);
                }
              }}
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
              transition={{ duration: 0.4 }}
              className="glass-strong relative w-full flex flex-col items-center justify-center rounded-3xl p-6 sm:p-10 text-center cursor-grab active:cursor-grabbing select-none touch-pan-y"
            >
              <Quote className="text-[var(--neon-violet)]" size={32} />
              <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed sm:text-xl md:text-2xl">
                "{items[i].quote}"
              </p>
              <div className="mt-8">
                <p className="font-semibold">{items[i].name}</p>
                <p className="text-sm text-muted-foreground">{items[i].role}</p>
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              suppressHydrationWarning
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-white" : "w-1.5 bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
