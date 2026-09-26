import React from 'react'

type PrimaryButtonType = {
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode
}

const PrimaryButton = ({ className, children, onClick }: PrimaryButtonType) => {
    return (
        <button className={`flex items-center gap-2 rounded-lg text-sm py-2 px-3 transition-all cursor-pointer font-medium
            ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default PrimaryButton