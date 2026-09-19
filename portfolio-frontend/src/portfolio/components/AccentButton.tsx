import React from 'react'

type AccentButtonType = {
    children: React.ReactNode
    className: string
}

const AccentButton = ({ children, className }: AccentButtonType) => {
    return (
        <button className={`flex items-center gap-2 ${className} py-1 px-3 rounded-2xl border-2 text-xs`}>
            {children}
        </button>
    )
}

export default AccentButton