import React from 'react'

type SecondaryButtonType = {
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode
}


const SecondaryButton = ({ className, children, onClick }: SecondaryButtonType) => {
    return (
        <button className='p-3 rounded-full text-lg border-4 border-primary/60 hover:border-primary cursor-pointer transition-all'>
            {children}
        </button>
    )
}

export default SecondaryButton