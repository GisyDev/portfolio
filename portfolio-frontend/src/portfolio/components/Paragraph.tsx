import React from 'react'

type ParagraphType = {
    children: React.ReactNode,
    className?: string
}

const Paragraph = ({ children, className }: ParagraphType) => {
    return (
        <p className={`text-primary-text tracking-[0.040em] ${className && className}`}>{children}</p>
    )
}

export default Paragraph