import { nav } from '../data/nav';


const Header = () => {
  return (
    <header className='fixed  w-full'>

      <nav className="mx-auto w-full py-5 px-8 flex justify-between items-center border-b-2">
        <div className='flex gap-10'>
          <h1 className='font-semibold text-lg'>Gisela Estévez Moleiro</h1>
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

        <div>

        </div>
      </nav>


    </header>
  )
}

export default Header