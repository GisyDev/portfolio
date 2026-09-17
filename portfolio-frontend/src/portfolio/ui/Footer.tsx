import { nav } from '../data/nav';
import { social_media } from '../data/about';
import TitleName from '../components/TitleName';
const Footer = () => {
  return (
    <footer className=' bg-white/10 h-100 flex'>
      <div className="flex flex-col w-7xl m-auto gap-30">
        <div className="flex justify-between w-full">
          <div className='space-y-8 text-xl'>
            <TitleName/>
            <p className='text-lg text-mute'>Desarrolladora Fullstack</p>
          </div>
          <div className=''>
            <h1 className='text-xl font-bold mb-5'>Indice</h1>
            <ul className='flex flex-col gap-2'>
              {
                nav.map((nav) => {
                  return <li className='text-mute'>{nav.text}</li>
                })
              }
            </ul>
          </div>
          <div>
            <h1 className='text-xl font-bold mb-5'>Contactos</h1>
            <ul className='flex flex-col gap-2'>
              {
                social_media.map((social) => {
                  return <li className='flex items-center  gap-2'>
                    <i className={`${social.icon}`}></i>
                    {social.name}
                  </li>
                })
              }
            </ul>
          </div>
        </div>
        <div className='text-mute flex justify-between'>
          <p>© 2026 Gisela Estévez Moleiro. Todos los derechos reservados</p>
          <p>Hecho con Vite + React + tailwind</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer