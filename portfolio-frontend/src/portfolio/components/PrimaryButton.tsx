import React from 'react'

type PrimaryButtonType = {
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode
}

const PrimaryButton = ({ className, children, onClick }: PrimaryButtonType) => {
    return (
        <button className={`flex items-center gap-1 rounded-lg font-semibold py-3 px-3 transition-all cursor-pointer 
            ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default PrimaryButton