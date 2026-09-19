import React from 'react'

type TitleSectionType = {
    title: string,
    icon: string,
    description?: string
}


const TitleSection = ({ title, icon, description }: TitleSectionType) => {
    return (
        <div className='flex'>
            <div className='flex gap-3 items-center mb-8'>
                <i className={`fa-solid ${icon} text-primary text-3xl`}></i>
                <h1 className='font-bold text-3xl'>{title}</h1>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default TitleSection