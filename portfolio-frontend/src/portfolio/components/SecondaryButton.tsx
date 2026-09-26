import React from 'react'

type SecondaryButtonType = {
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode
}


const SecondaryButton = ({ className, children, onClick }: SecondaryButtonType) => {
    return (
        <button className='p-4 rounded-full size-12 sm:rounded-2xl border-2 border-primary/60 hover:border-primary text-center cursor-pointer transition-all'>
            {children}
        </button>
    )
}

export default SecondaryButton