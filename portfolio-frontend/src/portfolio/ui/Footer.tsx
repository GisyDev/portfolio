import { sectionsNavArray } from '../data/nav';
import { social_media } from '../data/about';
import TitleName from '../components/TitleName';
const Footer = () => {
  return (
    <footer className='bg-black flex flex-col gap-1 items-center mt-25 text-sm pt-8 pb-4 w-full'>
      <div className="px-x sm:max-w-page w-full">
        <div className="flex justify-between w-full flex-col gap-10 sm:flex-row">
          <div className='space-y-8'>
            <TitleName />
            <p className=' text-primary-text'>Desarrolladora Fullstack</p>
          </div>
          <div className='flex justify-between sm:w-3/5'>
            <div className=''>
              <h1 className='font-semibold mb-4 text-sm'>Navegación</h1>
              <ul className='flex flex-col gap-2 text-xs'>
                {
                  sectionsNavArray.map((nav) => {
                    return <li className='text-primary-text'>
                      <a href={nav.enlace} className='hover:text-primary transition-all'>
                        {nav.text}
                      </a>
                    </li>
                  })
                }
              </ul>
            </div>
            <div className=''>
              <h1 className='font-semibold mb-4'>Contactos</h1>
              <ul className='flex flex-col gap-2 text-xs'>
                {
                  social_media.map((social) => {
                    return <li className=''>
                      <a href={social.link} className='flex items-center gap-2 hover:text-primary transition-all' target="blank">
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
        <span className='w-full border-t  border-zinc-800'></span>
      </div>
      <div className='text-primary-text flex flex-col sm:flex-row gap-3 justify-between m-auto text-xs px-x items-center  sm:max-w-page w-full'>
        <p>© 2026 Gisela Estévez Moleiro</p>
        <p>Hecho con Vite + React + Tailwind</p>
      </div>
    </footer>
  )
}

export default Footer