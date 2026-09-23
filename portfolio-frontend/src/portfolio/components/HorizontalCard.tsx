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
                bg-slate-800/30 backdrop-blur-sm
                border border-white/10
                transition-all duration-300 ease-out
                hover:bg-white/[0.07] hover:border-primary/50
                hover:shadow-[0_0_25px_-8px] hover:shadow-primary/40
                ${onClick ? 'cursor-pointer active:scale-[0.99]' : ''}
            `}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default HorizontalCard