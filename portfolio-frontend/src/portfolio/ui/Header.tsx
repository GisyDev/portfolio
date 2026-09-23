import { redirect, useLocation, useNavigate } from 'react-router-dom';
import TitleName from '../components/TitleName';
import { sectionsNavArray } from '../data/nav';
import useNavInterceptionObserver from '../hooks/useNavInterceptionObserver';
import NavModalMobile from '../modals/NavModalMobile';
import { useEffect, useState } from 'react';

const Header = () => {

  // useEffect(() => {
  //   document.addEventListener("scroll", (event) => {
  //     const lastKnownScrollPosition = Math.round(window.scrollY)
  //     const navId = document.getElementById("nav")

  //     if (navId) {
  //       if (lastKnownScrollPosition > 80) {
  //         navId.classList.add("border-2")
  //       } else {
  //         navId.classList.remove("border-2")
  //       }
  //     }
  //   });
  // }, []);


  const activeNav = useNavInterceptionObserver()

  const location = useLocation()
  const navigate = useNavigate()

  const reDirection = () => {
    if (location.pathname != "/portfolio") navigate('/portfolio', { replace: true })
  }

  const [hiddenNavMovile, setHiddenNavMovile] = useState(false);



  return (
    <header className='fixed w-full top-3 z-40 px-x'>

      <nav id="nav" className={`border-[1px] border-zinc-700/60 mx-auto max-w-page rounded-2xl py-4 px-8 flex justify-between items-center bg-black/30 backdrop-blur-xl transition-all`}>
        <div className='flex gap-10 '>
          <TitleName />
        </div>
        <div>
          <button onClick={() => setHiddenNavMovile(!hiddenNavMovile)} className='sm:hidden'>
            {
              hiddenNavMovile
                ? <i className="fa-solid fa-x"></i>
                : <i className="fa-solid fa-bars"></i>
            }
          </button>
        </div>
        <div className='hidden sm:block'>
          <ul className='flex flex-row gap-10 '>
            {
              sectionsNavArray.map((element) => {
                return <li className='font-semibold' onClick={() => reDirection()} >
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
        <NavModalMobile hiddenNavMovile={hiddenNavMovile} reDirection={reDirection} />

      </nav>

    </header>
  )
}

export default Header