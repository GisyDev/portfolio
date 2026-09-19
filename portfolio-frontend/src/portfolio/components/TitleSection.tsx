import React from 'react'

type TitleSectionType = {
    title: string,
    icon: string
}


const TitleSection = ({ title, icon }: TitleSectionType) => {
    return (
        <div className='flex gap-3 items-center mb-8'>
            <i className={`fa-solid ${icon} text-primary text-3xl`}></i>
            <h1 className='font-bold text-4xl'>{title}</h1>
        </div>
    )
}

export default TitleSection