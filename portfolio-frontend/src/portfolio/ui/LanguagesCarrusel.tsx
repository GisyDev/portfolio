import type { IconType } from "react-icons";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaJava, FaDocker, FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs, SiExpress, SiSpringboot,
  SiPostgresql, SiKubernetes,
} from "react-icons/si";
import TitleSection from "../components/TitleSection";

type Tech = { name: string; icon: IconType };

const techs: Tech[] = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "SQL", icon: FaDatabase },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Docker", icon: FaDocker },
];

export default function LanguageIcons() {
  // Se duplica la lista para que el bucle sea continuo y sin saltos
  const items = [...techs, ...techs];

  return (

    <section>

      <div
        className="group relative w-full overflow-hidden py-8 bg-primary"
      >
        <ul className="animate-marquee flex w-max group-hover:[animation-play-state:paused]">
          {items.map(({ name, icon: Icon }, i) => (
            <li
              key={`${name}-${i}`}
              aria-hidden={i >= techs.length}
              className="flex items-center gap-2 px-6 text-white"
            >
              <Icon className="h-9 w-9" />
              <span className="text-sm font-medium">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

  );
}