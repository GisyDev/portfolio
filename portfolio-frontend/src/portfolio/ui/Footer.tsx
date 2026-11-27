
import { sectionsNavArray } from '../data/nav';
import { social_media } from '../data/about';
import TitleName from '../components/TitleName';

const Footer = () => {
  const linkClass =
    'transition-colors duration-200 hover:text-primary focus-visible:text-primary focus-visible:outline-none';

  return (
    <footer className="mt-35 w-full  z-50"
      style={{
        backgroundColor: "var(--theme-bg-card)",
        borderColor: "var(--theme-border-card)",
      }}
    >

      {/* Contenido principal */}
      <div className="mx-auto w-full max-w-page px-x py-14">

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">

          {/* Marca */}
          <div className="flex flex-col items-start gap-5">

            <div className="text-2xl">
              <TitleName />
            </div>

            <p className="text-sm" style={{ color: "var(--theme-primary-text)" }}>
              Desarrolladora Fullstack
            </p>


          </div>

          {/* Navegación */}
          <nav
            aria-label="Navegación del pie"
            className="sm:border-l sm:border-slate-200 sm:pl-10"
          >
            <h2 className="mb-5 text-lg font-semibold text-secondary">
              Navegación
              <span className="mt-2 block h-1 w-12 rounded-full bg-primary" />
            </h2>

            <ul className="flex flex-col gap-3">
              {sectionsNavArray.map((nav) => (
                <li key={nav.id}>

                  <button
                    type="button"
                    className={`
    group flex items-center gap-3 text-sm
    text-[var(--theme-primary-text)]
    transition-colors duration-200
    hover:text-primary
    cursor-pointer
    ${linkClass}
  `}
                    onClick={() =>
                      document
                        .getElementById(nav.id)
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    <i
                      className={`fa-solid ${nav.icon} text-xs text-secondary
                      transition-colors duration-200
                    group-hover:text-primary`}
                      aria-hidden="true"
                    />

                    {nav.text}
                  </button>

                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div className="sm:border-l sm:border-slate-200 sm:pl-10">

            <h2 className="mb-5 text-lg font-semibold text-secondary">
              Contactos
              <span className="mt-2 block h-1 w-12 rounded-full bg-primary" />
            </h2>

            <ul className="flex flex-col gap-4">
              {social_media.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm text-[var(--theme-primary-text)]
                    transition-colors duration-200
                  hover:text-primary"
                  >
                    <span className="flex shrink-0 items-center justify-center rounded-xl text-secondary transition-colors group-hover:text-primary">
                      <i className={social.icon} aria-hidden="true" />
                    </span>

                    {social.name}
                  </a>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-200">
        <div
          className="
            mx-auto flex w-full max-w-page flex-col items-center
            justify-between gap-3 px-x py-5 text-xs text-slate-500
            sm:flex-row
          "
        >
          <p style={{ color: "var(--theme-primary-text)" }}>
            © 2026 <span className="font-semibold"
              style={{ color: "var(--theme-primary-text)" }}
            >
              Gisela Estévez Moleiro
            </span>
          </p>

          <p className="flex items-center gap-1"
            style={{ color: "var(--theme-primary-text)" }}
          >
            Hecho con usando Vite + React + Tailwind
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
