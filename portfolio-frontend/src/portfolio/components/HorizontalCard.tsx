import React from 'react'

type HorizontalCardType = {
    children: React.ReactNode
    onClick?: () => void
}

const HorizontalCard = ({ children, onClick }: HorizontalCardType) => {
    return (
        <div
            className={`
                group relative w-full p-5 space-y-4 rounded-2xl
                bg-black backdrop-blur-sm
                border border-zinc-700/80
                transition-all duration-300 ease-out
                 hover:border-primary/50
                ${onClick ? "cursor-pointer" : ""}
            `}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default HorizontalCard