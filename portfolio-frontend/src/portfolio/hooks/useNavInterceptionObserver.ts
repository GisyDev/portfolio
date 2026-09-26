import { useEffect, useState } from 'react'
import { sectionsNav, sectionsNavArray } from '../data/nav';
import { useLocation } from 'react-router-dom';

const useNavInterceptionObserver = () => {
    const [activeNav, setActiveNav] = useState<string | "sobre-mi">(sectionsNav.about.id);

    const location = useLocation()


    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(element => {
                const getDataSection = element.target.getAttribute("data-section")
                if (element.isIntersecting && getDataSection) {
                    setActiveNav(getDataSection)
                }
            });
        }, { rootMargin: '-40% 0px -55% 0px' })


        sectionsNavArray.forEach(element => {
            const el = document.getElementById(element.id)
            if (el) observer.observe(el)
        });

        return () => observer.disconnect()
    }, [location.pathname]);

    return activeNav
}

export default useNavInterceptionObserver