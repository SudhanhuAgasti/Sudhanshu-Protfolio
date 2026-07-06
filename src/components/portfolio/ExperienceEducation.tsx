import { type ComponentType } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    role: "FullStack Web Developer Intern",
    org: "Rooman Technologies Pvt. Ltd.",
    period: "March 2026 — May 2026",
    desc: "Developed responsive web applications using the MERN stack. Designed and built secure RESTful APIs with JWT-based authentication and authorization, optimized database queries, and designed clean interfaces with reusable React components.",
  },
];

const education = [
  {
    degree: "Master of Computer Application (MCA)",
    org: "Institute of Management and Information Technology, Cuttack, Odisha",
    period: "2024 — 2026",
    desc: "SGPA: 8.00. Deepened knowledge in advanced computer systems, database design, and web technologies.",
  },
  {
    degree: "Bachelor of Science (Graduation +3)",
    org: "Gopalpur Degree College, Gopalpur, Balasore",
    period: "2021 — 2024",
    desc: "Percentage: 80.25%. Developed analytical thinking, documentation skills, and logical reasoning.",
  },
  {
    degree: "Higher Secondary Education",
    org: "CHSE odisha at Gopalpur Higher Secondary School,Gopalpur,Balasore.",
    period: "2019 — 2021",
    desc: "Percentage: 74%.scinece stream in pcmb",
  }
];

function TimelineList({
  items,
  icon: Icon,
}: {
  items: Array<{ role?: string; degree?: string; org: string; period: string; desc: string }>;
  icon: ComponentType<{ size?: number; className?: string }>;
}) {
  return (
    <div className="relative">
      <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent" />
      <div className="space-y-6">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="relative pl-16"
          >
            <div className="absolute left-0 top-1 grid h-12 w-12 place-items-center rounded-2xl glass glow-violet">
              <Icon size={18} className="text-[var(--neon-cyan)]" />
            </div>
            <div className="glass rounded-2xl p-5 hover:border-white/20 transition-colors">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="text-lg font-semibold">{it.role || it.degree}</h4>
                <span className="font-mono text-xs text-muted-foreground">{it.period}</span>
              </div>
              <p className="text-sm text-[var(--neon-violet)]">{it.org}</p>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ExperienceEducation() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
            04 — Experience
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Where I've<span className="text-gradient"> shipped</span>!
          </h2>
          <div className="mt-10">
            <TimelineList items={experience} icon={Briefcase} />
          </div>
        </div>
        <div id="education">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
            05 — Education
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            What I've <span className="text-gradient">learned</span>!
          </h2>
          <div className="mt-10">
            <TimelineList items={education} icon={GraduationCap} />
          </div>
        </div>
      </div>
    </section>
  );
}
