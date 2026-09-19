import React from 'react'

type HorizontalCardType = {
    children: React.ReactNode
    onClick?: () => void
}

const HorizontalCard = ({ children, onClick }: HorizontalCardType) => {
    return (
        <div
            className='bg-white/10 p-5 rounded-2xl border-2 border-zinc-700/50 space-y-4 w-full cursor-pointer hover:bg-white/15 hover:border-primary transition-all'
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default HorizontalCard