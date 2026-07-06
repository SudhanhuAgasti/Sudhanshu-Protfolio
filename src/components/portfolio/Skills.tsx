import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, type ComponentType, CSSProperties, MouseEvent, ReactNode } from "react";
import { Layout, ShieldCheck, Database, Wrench, Code, Users } from "lucide-react";

type Skill = {
  title: string;
  icon: ComponentType<{ size?: number; style?: CSSProperties }>;
  items: string[];
  level: number;
  accent: string;
  span?: string;
};

const skills: Skill[] = [
  {
    title: "Programming Languages",
    icon: Code,
    items: ["JavaScript (ES6+)"],
    level: 90,
    accent: "var(--neon-cyan)",
  },
  {
    title: "Frontend Technologies",
    icon: Layout,
    items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
    level: 92,
    accent: "var(--neon-violet)",
  },
  {
    title: "Backend Technologies",
    icon: ShieldCheck,
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    level: 88,
    accent: "var(--neon-pink)",
  },
  {
    title: "Database Technologies",
    icon: Database,
    items: ["MongoDB", "Mongoose", "MySQL"],
    level: 85,
    accent: "var(--neon-cyan)",
  },
  {
    title: "Development Tools & IDEs",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Postman"],
    level: 87,
    accent: "var(--neon-violet)",
  },
  {
    title: "AI Tools & Concepts",
    icon: Users,
    items: [
      "GitHub Copilot",
      "ChatGPT",
      "Claude",
      "MVC Architecture",
      "API Integration",
      "Auth & Authorization",
    ],
    level: 90,
    accent: "var(--neon-pink)",
  },
  {
    title: "Exploring",
    icon: Users,
    items: [
      "AWS (ECR, ECS)",
      "Docker & Containerization",
      "CI/CD Pipelines (GitHub Actions)",
      "Vercel & Netlify Deployment",
      "Nginx Web Server",
      "Serverless Architectures",
      "Performance Monitoring & Scaling",
    ],
    level: 86,
    accent: "var(--neon-pink)",
    span: "sm:col-span-2 lg:col-span-3",
  },
];

function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rX = useSpring(useTransform(y, [-50, 50], [8, -8]), { stiffness: 200, damping: 20 });
  const rY = useSpring(useTransform(x, [-50, 50], [-8, 8]), { stiffness: 200, damping: 20 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(
      window.matchMedia("(max-width: 768px)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0
    );
  }, []);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isTouch) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  };

  return (
    <motion.div
      onMouseMove={isTouch ? undefined : onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={isTouch ? {} : { rotateX: rX, rotateY: rY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProgressRing({ value, color }: { value: number; color: string }) {
  const r = 22;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div className="relative h-14 w-14">
      <svg viewBox="0 0 60 60" className="h-full w-full -rotate-90">
        <circle
          cx="30"
          cy="30"
          r={r}
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="4"
          fill="none"
        />
        <motion.circle
          cx="30"
          cy="30"
          r={r}
          stroke={color}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center text-xs font-semibold">
        {value}
      </span>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
            02 — Skills
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The <span className="text-gradient">toolkit</span> I ship with!
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.1 }}
                className={s.span || "w-full"}
              >
                <TiltCard className="group relative h-full">
                  <div
                    className="glass relative h-full overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:border-white/20"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <div
                      className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(500px circle at var(--mx,50%) var(--my,50%), ${s.accent}30, transparent 40%)`,
                      }}
                    />
                    <div className="relative flex items-start justify-between">
                      <div
                        className="glass grid h-12 w-12 place-items-center rounded-xl"
                        style={{ boxShadow: `0 0 30px -10px ${s.accent}` }}
                      >
                        <Icon size={20} style={{ color: s.accent }} />
                      </div>
                      <ProgressRing value={s.level} color={s.accent} />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold tracking-tight">{s.title}</h3>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {s.items.map((it) => (
                        <li
                          key={it}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground"
                        >
                          {it}
                        </li>
                      ))}
                    </ul>
                    <div
                      className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full blur-3xl opacity-40"
                      style={{ background: s.accent }}
                    />
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
