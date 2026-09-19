import TitleName from '../components/TitleName';
import { sectionsNavArray } from '../data/nav';
import useNavInterceptionObserver from '../hooks/useNavInterceptionObserver';

const Header = () => {

  const activeNav = useNavInterceptionObserver()

  return (
    <header className='fixed w-full top-3 z-40'>

      <nav className="mx-auto max-w-page rounded-4xl py-6 px-8 flex justify-between items-center bg-black/5 backdrop-blur-xl">
        <div className='flex gap-10 '>
          <TitleName />
        </div>
        <div>
          <ul className='flex flex-row gap-10'>
            {
              sectionsNavArray.map((element) => {
                return <li className='font-semibold '>
                  <a
                    className={`hover:text-primary transition-all ${activeNav === element.id ? "text-primary" : ""}`} href={`${element.enlace} `}
                    id={element.enlace}
                  >
                    {element.text}
                  </a>
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