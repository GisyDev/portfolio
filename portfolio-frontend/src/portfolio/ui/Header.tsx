import TitleName from '../components/TitleName';
import { nav } from '../data/nav';


const Header = () => {
  return (
    <header className='fixed w-full top-3 z-50'>

      <nav className="mx-auto w-7xl rounded-4xl py-6 px-8 flex justify-between items-center text-xl bg-black/5 backdrop-blur-3xl">
        <div className='flex gap-10 '>
          <TitleName/>
        </div>
        <div>
          <ul className='flex flex-row gap-10'>
            {
              nav.map((element) => {
                return <li className='font-semibold '>
                  <a className="hover:text-primary transition-all" href={`${element.enlace}`}>{element.text}</a>
                </li>
              })
            }
          </ul>
        </div>

        <div>

        </div>
      </nav>


    </header>
  )
}

export default Header