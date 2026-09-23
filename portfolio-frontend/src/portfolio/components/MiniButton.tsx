import React from 'react'

type MiniButtonType = {
    children: React.ReactNode,
    onClick?: (() => void | undefined) | undefined
}

const MiniButton = ({ children, onClick }: MiniButtonType) => {

    const onHover = onClick ? "cursor-pointer" : ""
    return (
        <button className={`${onHover} bg-white/10 py-1 px-3 font-semibold text-primary-text rounded-lg backdrop-blur-2xl flex items-center gap-4 hover:bg-white/20 transition-all`}
        onClick={onClick}
        >
            {children}
        </button>
    )
}

export default MiniButton