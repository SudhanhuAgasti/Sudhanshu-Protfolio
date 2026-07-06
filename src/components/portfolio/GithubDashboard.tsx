import { motion } from "framer-motion";
import { Github, GitCommit, Star, GitFork } from "lucide-react";

const languages = [
  { name: "JavaScript", pct: 50, color: "#F7DF1E" },
  { name: "HTML", pct: 25, color: "#E34F26" },
  { name: "CSS", pct: 15, color: "#1572B6" },
  { name: "Other (Node/Mongoose)", pct: 10, color: "#A78BFA" },
];

// Deterministic pseudo-random contribution grid (26 weeks x 7)
const grid = Array.from({ length: 26 * 7 }, (_, i) => {
  const v = Math.floor(((Math.sin(i * 1.7) + 1) / 2) * 4.999);
  return v;
});
const levels = [
  "bg-white/[0.04]",
  "bg-emerald-500/25",
  "bg-emerald-500/45",
  "bg-emerald-500/70",
  "bg-emerald-400",
];

export function GithubDashboard() {
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
            06 — GitHub
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Consistent <span className="text-gradient">contributions</span>!
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-3xl p-4 sm:p-8 w-full overflow-hidden"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="glass grid h-10 w-10 place-items-center rounded-xl">
                  <Github size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold">@github.com/SudhanhuAgasti</p>
                  <p className="text-xs text-muted-foreground">contributions of mine !</p>
                </div>
              </div>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <GitCommit size={14} />
                  842
                </span>
                <span className="flex items-center gap-1">
                  <Star size={14} />
                  218
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={14} />
                  76
                </span>
              </div>
            </div>

            <div className="mt-6 w-full overflow-x-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent pb-3">
              <div className="grid grid-flow-col grid-rows-7 gap-[2px] sm:gap-[3px] min-w-[420px] sm:min-w-[600px]">
                {grid.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.003, duration: 0.3 }}
                    className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-[1px] sm:rounded-sm ${levels[v]}`}
                  />
                ))}
              </div>
              <div className="mt-3 flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
                Less{" "}
                {levels.map((l, i) => (
                  <span key={i} className={`h-2.5 w-2.5 rounded-sm ${l}`} />
                ))}{" "}
                More
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-strong rounded-3xl p-4 sm:p-8 w-full overflow-hidden"
          >
            <h3 className="text-lg font-semibold">Top Languages</h3>
            <div className="mt-6 space-y-4">
              {languages.map((l, i) => (
                <div key={l.name}>
                  <div className="flex justify-between text-xs">
                    <span>{l.name}</span>
                    <span className="text-muted-foreground">{l.pct}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: l.color, boxShadow: `0 0 12px ${l.color}` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
