import { nav } from '../data/nav';


const Header = () => {
  return (
    <header className='fixed w-full z-50'>

      <nav className="mx-auto w-full py-8 px-8 flex justify-between items-center  text-xl">
        <div className='flex gap-10'>
          <div className='flex font-semibold gap-2'>
            <p className='text-primary font-bold'>{"<"}</p>
            <h1 className=''>GisyDev</h1>
            <p className='text-primary font-bold'>{"/>"}</p>
          </div>
        </div>

        <div>
          <ul className='flex flex-row gap-10'>
            {
              nav.map((element) => {
                return <li className='font-semibold '>
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