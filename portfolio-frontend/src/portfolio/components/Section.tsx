import React from 'react'
import TitleSection from './TitleSection'


type SectionType = {
    children: React.ReactNode,
    title: string,
    icon: string,
    ref: string,
}

const Section = ({ children, title, icon, ref }: SectionType) => {
    return (
        <section className='w-page m-auto scroll-mt-32' id={ref}>
            <TitleSection title={title} icon={icon}/>
            {children}
        </section>
    )
}

export default Section