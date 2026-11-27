import { useLocation, useNavigate } from 'react-router-dom';
import TitleName from '../components/TitleName';
import { sectionsNavArray } from '../data/nav';
import useNavInterceptionObserver from '../hooks/useNavInterceptionObserver';
import NavModalMobile from '../modals/NavModalMobile';
import { useEffect, useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Header = () => {

  const [hiddenNavMovile, setHiddenNavMovile] = useState(false);
  const activeNav = useNavInterceptionObserver()
  const { theme, toggle } = useDarkMode()

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 220);

    onScroll(); 
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const styleBox = scrolled
    ? {
      backgroundColor: "var(--theme-nav-bg)",
      border: "1px solid var(--theme-nav-border)",
    }
    : {};
  const location = useLocation()
  const navigate = useNavigate()

  const reDirection = () => {
    if (location.pathname != "/") navigate('/ ', { replace: true })
  }

  return (
    <header className='fixed w-full top-3 z-40 px-x'>

      <nav
        id="nav"
        className='mx-auto max-w-page rounded-2xl py-2 px-8 flex justify-between items-center backdrop-blur-xl transition-all border border-transparent'
        style={styleBox}
      >
        <div className='flex gap-10 '>
          <TitleName />
        </div>

        {
           <div className='flex lg:hidden items-center gap-4 '>
            <button onClick={() => setHiddenNavMovile(!hiddenNavMovile)} className='' style={{ color: "var(--theme-title-text)" }}>
              {
                hiddenNavMovile
                  ? <i className="fa-solid fa-x"></i>
                  : <i className="fa-solid fa-bars"></i>
              }
            </button>
          </div>
        }

        <div className='hidden lg:flex items-center gap-6 '>
          <ul className='flex flex-row gap-10'>
            {
              sectionsNavArray.map((element) => {
                return <li className='font-semibold' onClick={() => reDirection()} key={element.id}>
                  <button
                    className={`hover:text-primary transition-all ${activeNav === element.id ? "text-primary" : ""} cursor-pointer`}
                    style={{ color: activeNav === element.id ? undefined : "var(--theme-primary-text)" }}
                    id={element.enlace}
                    onClick={() => {
                      document.getElementById(element.id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {element.text}
                  </button>
                </li>
              })
            }
          </ul>


        </div>
        {/* <button
          onClick={toggle}
          aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
          className='hidden w-9 h-9 lg:flex items-center justify-center rounded-xl border transition-all duration-300 cursor-pointer hover:border-primary/60 hover:text-primary'
          style={{
            border: "1px solid var(--theme-nav-border)",
            color: "var(--theme-primary-text)",
            backgroundColor: "var(--theme-bg-card)",
          }}
        >
          {theme === 'dark'
            ? <i className="fa-solid fa-sun text-sm"></i>
            : <i className="fa-solid fa-moon text-sm"></i>
          }
        </button> */}
        <NavModalMobile hiddenNavMovile={hiddenNavMovile} reDirection={reDirection} toggle={toggle} theme={theme} />
      </nav>

    </header>
  )
}

export default Header
