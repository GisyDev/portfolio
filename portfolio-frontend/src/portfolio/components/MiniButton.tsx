import React from 'react'

type MiniButtonType = {
    children: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const MiniButton = ({ children, onClick }: MiniButtonType) => {
    return (
        <button className='bg-white/15 py-2 px-3 text-lg font-semibold text-mute rounded-lg backdrop-blur-2xl flex items-center gap-4 cursor-pointer hover:bg-white/20 transition-all '>
            {children}
        </button>
    )
}

export default MiniButton