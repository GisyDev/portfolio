import React from 'react'

type SecondaryButtonType = {
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode
}


const SecondaryButton = ({ className, children, onClick }: SecondaryButtonType) => {
    return (
        <button className='p-3 rounded-full border-2 text-sm border-primary/60 hover:border-primary cursor-pointer transition-all'>
            {children}
        </button>
    )
}

export default SecondaryButton