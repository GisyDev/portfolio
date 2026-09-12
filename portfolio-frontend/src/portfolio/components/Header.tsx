import { nav } from '../data/nav';
import logo from "../../assets/images/logo.jpg"

const Header = () => {
  return (
    <header className='fixed top-3 w-full'>

      <nav className="mx-auto w-5xl py-4 px-8 rounded-2xl flex justify-between items-center bg-purple-400 ">
        <div className='flex gap-10'>
          <img src={logo} alt="Logo" className='w-10'/>
          <h1>Gisela Estévez Moleiro</h1>
        </div>

        <div>
          <ul className='flex flex-row gap-10'>
            {
              nav.map((element) => {
                return <li>
                  <a href={element.enlace}>{element.text}</a>
                </li>
              })
            }
          </ul>
        </div>
      </nav>


    </header>
  )
}

export default Header