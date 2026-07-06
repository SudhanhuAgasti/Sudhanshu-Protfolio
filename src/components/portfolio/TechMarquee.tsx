import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPostman,
  SiFramer,
  SiGreensock,
  SiSpringboot,
  SiJavascript,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const stack = [
  { Icon: SiJavascript, name: "Javascript", c: "#00ED64" },
  { Icon: SiReact, name: "React", c: "#61DAFB" },
  { Icon: SiNodedotjs, name: "Node", c: "#8CC84B" },
  { Icon: SiMongodb, name: "MongoDB", c: "#00ED64" },
  { Icon: SiExpress, name: "Express", c: "#ffffff" },
  { Icon: SiTailwindcss, name: "Tailwind", c: "#38BDF8" },
  { Icon: SiGit, name: "Git", c: "#F1502F" },
  { Icon: SiGithub, name: "GitHub", c: "#ffffff" },
  { Icon: VscCode, name: "VS Code", c: "#0EA5E9" },
  { Icon: SiPostman, name: "Postman", c: "#FF6C37" },
  { Icon: SiFramer, name: "Framer Motion", c: "#ffffff" },
  { Icon: SiTypescript, name: "Framer Motion", c: "#0EA5E9" },

];

export function TechMarquee() {
  const items = [...stack, ...stack];
  return (
    <section className="relative py-20 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          The stack I use every day!
        </p>
      </div>
      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {items.map(({ Icon, name, c }, i) => (
            <div key={i} className="glass flex shrink-0 items-center gap-3 rounded-full px-6 py-3">
              <Icon size={22} color={c} />
              <span className="text-sm font-medium whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
