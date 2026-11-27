import React from 'react'
import TitleSection from './TitleSection'


type SectionType = {
    children: React.ReactNode,
    title: string,
    description?: string,
    icon: string,
    reference?: string,
}

const Section = ({ children, title, description, icon, reference }: SectionType) => {
    return (
        <section
            className="mx-auto w-full max-w-page scroll-mt-32 px-x opacity-0 animate-fade-in animate-delay-200"
            id={reference}
            data-section={reference}
        >
            <TitleSection title={title} description={description} icon={icon} />
            {children}
        </section>
    )
}

export default Section