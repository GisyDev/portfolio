import React, { useEffect } from 'react'
import { sectionsNav, sectionsNavArray } from '../data/nav'

const useAnimationInterceptionObserver = () => {

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(element => {
                if(element.isIntersecting && element.target.id !== sectionsNav.about.id) {
                    element.target.classList.add("animate-fade-in")
                    element.target.classList.remove("opacity-0")
                }
            });
        }, {   })

        sectionsNavArray.forEach((section) => {
            const el = document.getElementById(section.id)
            if(el) observer.observe(el)
        })
    }, [])
}

export default useAnimationInterceptionObserver