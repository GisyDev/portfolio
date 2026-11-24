import React from 'react'

type AccentButtonType = {
    children?: React.ReactNode
    onClickFunction?: () => void
}

const AccentButton = ({ children, onClickFunction }: AccentButtonType) => {
    return (
        <button
            className="group flex items-center gap-2 text-xs px-4 py-2 rounded-full bg-primary/10 border border-transparent backdrop-blur-sm font-bold text-primary  hover:border-primary! transition-all duration-300 cursor-pointer"
            onClick={() => onClickFunction && onClickFunction()}
        >
            {children}
        </button>
    )
}

export default AccentButton
