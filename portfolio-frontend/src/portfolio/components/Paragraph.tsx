import React from 'react'

type ParagraphType = {
    children: React.ReactNode,
    className?: string
}

const Paragraph = ({ children, className }: ParagraphType) => {
    return (
        <p className={`text-mute font-medium tracking-[0.020em] ${className && className}`}>{children}</p>
    )
}

export default Paragraph