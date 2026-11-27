import React from 'react'
import Paragraph from './Paragraph'

type TitleSectionType = {
    title: string,
    icon: string,
    description?: string
}


const TitleSection = ({ title, icon, description }: TitleSectionType) => {
    return (
        <div className='flex mb-5'>
            <div className=''>
                <div className='flex flex-col gap-3 text-sm font-medium'>
                    <div className='flex gap-3 items-center'>
                        <i className={`fa-solid ${icon} text-primary text-3xl`}></i>
                        <h1
                            className='font-bold text-2xl'
                            style={{ color: "var(--theme-title-text)" }}
                        >
                            {title}
                        </h1>
                    </div>


                    {description &&
                        <p style={{ color: "var(--theme-muted-text)" }}>
                            {description}
                        </p>}
                </div>

                <span className="mt-4 block h-1 w-20 rounded-full bg-secondary" />
            </div>

        </div>
    )
}

export default TitleSection
