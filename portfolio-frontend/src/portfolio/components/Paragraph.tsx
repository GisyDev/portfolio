import React from 'react'

type ParagraphType = {
    children: React.ReactNode,
    className?: string
}

const Paragraph = ({ children, className }: ParagraphType) => {
    return (
        <p className={`text-lg text-primary-text leading-[1.7]${className && className}`}>{children}</p>
    )
}

export default Paragraph