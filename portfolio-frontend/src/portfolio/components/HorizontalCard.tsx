import React from 'react'

type HorizontalCardType = {
    children: React.ReactNode
    onClick?: () => void
}

const HorizontalCard = ({ children, onClick }: HorizontalCardType) => {

    const classHover = onClick && "hover:border-primary cursor-pointer"
    return (
        <div
            className={`bg-gray/30 p-5 rounded-2xl border-2 border-gray/50 space-y-4 w-full hover:bg-white/15 ${classHover} transition-all`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default HorizontalCard