

import LanguageCard from "../components/LanguageCard";
import Paragraph from "../components/Paragraph";
import { sectionsNav } from '../data/nav';
import { program_languages } from "../data/skills";


export default function AboutMe() {
  return (
    <section
      id={sectionsNav.sobreMi.id}
      data-section={sectionsNav.sobreMi.id}
      className="mx-auto flex max-w-page items-center gap-20 scroll-m-32 opacity-0"
      style={{ color: "var(--theme-title-text)" }}
    >
      {/* Foto */}
      <div className="flex w-2/4 hidden md:inline">
        <div className="relative h-[480px] w-full max-w-[600px]">
          <div
            className="absolute -bottom-5 -right-5 left-5 top-5 rounded-[32px] border-2 border-primary"
          />
          <img
            src={"images/yo2.jpeg"}
            alt="Gisela Estévez Moleiro"
            className="absolute inset-0 h-full w-full rounded-[32px] object-cover"
            style={{ backgroundColor: "var(--theme-bg-card)" }}
          />
          <div
            className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[15px] font-bold"
            style={{
              backgroundColor: "var(--theme-bg-card)",
              borderColor: "var(--theme-border-card)",
              color: "var(--theme-title-text)",
            }}
          >
            Tenerife, Canarias
          </div>
        </div>
      </div>

      {/* Texto */}
      <div className="flex flex-col gap-6 w-full md:w-max-3/4">

        <h2
          className="font-display text-[44px] font-bold leading-[1.1] tracking-tight"
          style={{ color: "var(--theme-title-text)" }}
        >
          Me gusta cuidar tanto lo que se ve como lo que hay detrás.
        </h2>

        <Paragraph>
          Soy desarrolladora fullstack y trabajo en el frontend y en el backend
          de aplicaciones web. Me he formado en desarrollo web, multiplataforma
          y redes, lo que me da una visión completa de cómo se construye y se
          despliega un proyecto.
        </Paragraph>

        {/* Stack */}
        <div>
          <p className="mb-3 text-sm" style={{ color: "var(--theme-primary-text)" }}>Tecnologias que domino:</p>
          <div className="mt-1 flex flex-wrap gap-2.5">
            {program_languages.map((tech) => (
              <LanguageCard skill={tech} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
