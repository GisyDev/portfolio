import { sectionsNavArray } from '../data/nav'
import useNavInterceptionObserver from '../hooks/useNavInterceptionObserver'

type NavModalMobileTypeHidden = {
    hiddenNavMovile: boolean,
    reDirection: () => void
}


const NavModalMobile = ({ hiddenNavMovile, reDirection }: NavModalMobileTypeHidden) => {

    const activeNav = useNavInterceptionObserver()
    const classIsHidden = hiddenNavMovile ? "opacity-100" : "opacity-0 pointer-events-none"
    return (
        <div className={`${classIsHidden} fixed right-0 top-10 p-5 bg-white/5 backdrop-blur-2xl rounded-lg w-2/4 transition-all  duration-80 z-50`}>
            <ul className='flex flex-col gap-5 '>
                {
                    sectionsNavArray.map((element) => {
                        return <li className='font-semibold' onClick={() => reDirection()} >
                            <a
                                className={`hover:text-primary transition-all ${activeNav === element.id ? "text-primary" : ""}`} href={`${element.enlace}`}
                                id={element.enlace}
                            >
                                {element.text}
                            </a>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default NavModalMobile