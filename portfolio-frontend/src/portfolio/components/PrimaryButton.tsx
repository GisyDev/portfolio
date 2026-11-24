import React from 'react'

type PrimaryButtonType = {
    className?: string,
    style?: React.CSSProperties,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode
}

const PrimaryButton = ({ className, style, children, onClick }: PrimaryButtonType) => {
    return (
        <button
            className={`flex items-center gap-2 rounded-md text-sm py-2 px-4 transition-all cursor-pointer font-medium
            ${className}`}
            style={style}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default PrimaryButton
