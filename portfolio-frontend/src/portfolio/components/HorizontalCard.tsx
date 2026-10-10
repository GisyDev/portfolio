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
                bg-bg-card/30 backdrop-blur-2xl
                border border-border-card
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