import { sectionsNavArray } from '../data/nav'
import useNavInterceptionObserver from '../hooks/useNavInterceptionObserver'

type NavModalMobileTypeHidden = {
    hiddenNavMovile: boolean,
    reDirection: () => void,
    toggle: () => void,
    theme: 'dark' | 'light'
}


const NavModalMobile = ({ hiddenNavMovile, reDirection, toggle, theme }: NavModalMobileTypeHidden) => {

    const activeNav = useNavInterceptionObserver()
    const classIsHidden = hiddenNavMovile ? "opacity-100" : "opacity-0 pointer-events-none"
    return (
        <div
            className={`${classIsHidden} fixed right-5 top-10 p-5 backdrop-blur-3xl rounded-lg transition-all duration-80 z-50`}
            style={{
                backgroundColor: "var(--theme-mobile-nav-bg)",
                border: "2px solid var(--theme-nav-border)",
                color: "var(--theme-title-text)",
            }}
        >
            <ul className='flex flex-col gap-5'>
                {
                    sectionsNavArray.map((element) => {
                        return <li className='font-semibold' onClick={() => reDirection()} key={element.id}>
                            <a
                                className={`hover:text-primary transition-all ${activeNav === element.id ? "text-primary" : ""}`}
                                style={{ color: activeNav === element.id ? undefined : "var(--theme-primary-text)" }}
                                href={`${element.enlace}`}
                                id={element.enlace}
                            >
                                {element.text}
                            </a>
                        </li>
                    })
                }
                <li>
                    <button
                        onClick={toggle}
                        className='flex items-center gap-2 hover:text-primary transition-all cursor-pointer font-semibold'
                        style={{ color: "var(--theme-primary-text)" }}
                    >
                        {theme === 'dark'
                            ? <><i className="fa-solid fa-sun text-sm"></i><span>Modo claro</span></>
                            : <><i className="fa-solid fa-moon text-sm"></i><span>Modo oscuro</span></>
                        }
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default NavModalMobile
