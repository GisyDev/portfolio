import { sectionsNavArray } from '../data/nav';
import { social_media } from '../data/about';
import TitleName from '../components/TitleName';

const Footer = () => {
  return (
    <footer
      className='flex flex-col gap-1 items-center mt-35 text-sm pt-15 pb-5 w-full backdrop-blur-2xl'
      style={{ backgroundColor: "var(--theme-footer-bg)" }}
    >
      <div className="px-x sm:max-w-page w-full">
        <div className="flex justify-between w-full flex-col gap-10 sm:flex-row mb-5">
          <div className='space-y-4'>
            <TitleName />
            <p className='text-xs' style={{ color: "var(--theme-primary-text)" }}>Desarrolladora Fullstack</p>
          </div>
          <div className='flex justify-between sm:w-3/5'>
            <div className=''>
              <h1 className='font-semibold mb-4 text-sm' style={{ color: "var(--theme-title-text)" }}>Navegación</h1>
              <ul className='flex flex-col gap-2 text-xs'>
                {
                  sectionsNavArray.map((nav) => {
                    return <li key={nav.id} style={{ color: "var(--theme-primary-text)" }}>
                      <button
                        className='hover:text-primary transition-all cursor-pointer'
                        onClick={() => document?.getElementById(nav.id)?.scrollIntoView({ behavior: "smooth" })}
                      >
                        {nav.text}
                      </button>
                    </li>
                  })
                }
              </ul>
            </div>
            <div className=''>
              <h1 className='font-semibold mb-4' style={{ color: "var(--theme-title-text)" }}>Contactos</h1>
              <ul className='flex flex-col gap-2 text-xs'>
                {
                  social_media.map((social) => {
                    return <li key={social.name}>
                      <a
                        href={social.link}
                        className='flex items-center gap-2 hover:text-primary transition-all'
                        style={{ color: "var(--theme-primary-text)" }}
                        target="blank"
                      >
                        <i className={`${social.icon}`}></i>
                        {social.name}
                      </a>
                    </li>
                  })
                }
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div className='w-full h-10 flex items-center'>
        <span
          className='w-full border-t'
          style={{ borderColor: "var(--theme-footer-border)" }}
        ></span>
      </div>
      <div
        className='flex flex-col sm:flex-row gap-3 justify-between m-auto text-xs px-x items-center sm:max-w-page w-full'
        style={{ color: "var(--theme-primary-text)" }}
      >
        <p>© 2026 Gisela Estévez Moleiro</p>
        <p>Hecho con Vite + React + Tailwind</p>
      </div>
    </footer>
  )
}

export default Footer
