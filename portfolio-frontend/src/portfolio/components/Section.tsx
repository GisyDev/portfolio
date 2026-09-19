import React from 'react'


type SectionType = {
    children: React.ReactNode,
    title: string,
    icon: string,
    ref: string,
}

const Section = ({ children, title, icon, ref } : SectionType) => {
    return (
        <section className='w-6xl m-auto scroll-mt-32 mb-10 mt-15' id={ref}>

            <div className='flex gap-3 items-center mb-12'>
                <i className={`fa-solid ${icon} text-primary text-4xl`}></i>
                <h1 className='font-bold text-4xl'>{title}</h1>
            </div>

            
                {children}
          
        </section>
    )
}

export default Section