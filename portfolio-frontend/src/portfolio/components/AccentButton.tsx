import React from 'react'

type AccentButtonType = {
    children?: React.ReactNode
    text: string
}

const AccentButton = ({ children, text }: AccentButtonType) => {
    return (
        <button className="group flex items-center gap-2 text-xs px-4 py-2 rounded-full text-white border border-primary/50 bg-primary/10 backdrop-blur-sm  hover:border-primary transition-all duration-300 ">
            {children}
            <p className="font-medium tracking-wide">{text}</p>
        </button>
    )
}

export default AccentButton