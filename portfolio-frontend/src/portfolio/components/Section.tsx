import React from 'react'
import TitleSection from './TitleSection'


type SectionType = {
    children: React.ReactNode,
    title: string,
    icon: string,
    reference?: string,
}

const Section = ({ children, title, icon, reference }: SectionType) => {
    return (
        <section className='w-page m-auto scroll-mt-32' id={reference} data-section={reference}>
            <TitleSection title={title} icon={icon}/>
            {children}
        </section>
    )
}

export default Section