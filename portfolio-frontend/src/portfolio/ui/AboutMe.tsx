
import logo from "../../assets/images/yo.jpeg"
import LanguageCard from "../components/LanguageCard";
import Paragraph from "../components/Paragraph";
import { sectionsNav } from '../data/nav';
import { program_languages } from "../data/skills";


export default function AboutMe() {
  return (
    <section
      id={sectionsNav.sobreMi.id} data-section={sectionsNav.sobreMi.id}
      className="mx-auto flex max-w-page items-center gap-20  text-[#F4F1F7] scroll-m-32 opacity-0"
    >
      {/* Foto */}
      <div className="flex w-2/5 hidden md:inline">
        <div className="relative h-[480px] w-full max-w-[400px]">
          <div className="absolute -bottom-5 -right-5 left-5 top-5 rounded-[32px] border-2 border-[#F0609E]" />
          <img
            src={logo}
            alt="Gisela Estévez Moleiro"
            className="absolute inset-0 h-full w-full rounded-[32px] bg-[#1B1826] object-cover"
          />
          <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-[#2F2B3E] bg-[#0B0A10] px-4 py-2.5 text-[15px] font-bold">
            {/* <MapPin size={16} className="text-[#F0609E]" strokeWidth={2.2} /> */}
            Tenerife, Canarias
          </div>
        </div>
      </div>

      {/* Texto */}
      <div className="flex flex-col gap-6 w-full md:w-max-4/5">

        <h2 className="font-display text-[44px] font-bold leading-[1.1] tracking-tight">
          Me gusta cuidar tanto lo que se ve como lo que hay detrás.
        </h2>

        <Paragraph>
          Soy desarrolladora fullstack y trabajo en el frontend y en el backend
          de aplicaciones web. Me he formado en desarrollo web, multiplataforma
          y redes, lo que me da una visión completa de cómo se construye y se
          despliega un proyecto.
        </Paragraph>


        {/* <p className="text-lg leading-[1.7] text-[#C9C4D4]">
          [Cuenta aquí qué te motiva y qué tipo de proyectos te gusta construir]
        </p> */}

        {/* Formación
        <div className="mt-1 flex flex-wrap gap-3.5">
          {education.map(({ code, name }) => (
            <div
              key={code}
              className="min-w-[170px] flex-1 rounded-2xl border border-[#2A2736] bg-[#15131D] px-[18px] py-4"
            >
              <div className="font-display text-2xl font-bold text-[#F0609E]">
                {code}
              </div>
              <div className="mt-1 text-sm leading-snug text-[#B9B4C6]">
                {name}
              </div>
            </div>
          ))}
        </div> */}

        {/* Stack */}
        <div>

          <p className="mb-3 text-primary-text text-sm">Tecnologias que domino:</p>
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