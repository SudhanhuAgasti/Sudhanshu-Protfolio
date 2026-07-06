import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  {
    name: "Introduction to Generative AI",
    org: "Google Cloud / Coursera",
    year: "2025",
  },
  {
    name: "Introduction to Software Engineering",
    org: "IBM / Coursera",
    year: "2025",
  },
];

export function Certificates() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
            07 — Certificates
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Learning <span className="text-gradient">Achievements</span>!
          </h2>
        </motion.div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition-colors hover:border-white/20"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--neon-violet)]/20 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="glass grid h-11 w-11 place-items-center rounded-xl">
                <Award size={18} className="text-[var(--neon-cyan)]" />
              </div>
              <h3 className="mt-4 font-semibold">{c.name}</h3>
              <p className="text-sm text-muted-foreground">{c.org}</p>
              <p className="mt-3 font-mono text-xs text-[var(--neon-violet)]">{c.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
