import React from 'react'

type ParagraphType = {
    children: React.ReactNode,
    className?: string
}

const Paragraph = ({ children, className }: ParagraphType) => {
    return (
        <p
            className={`text-lg leading-[1.7] ${className && className}`}
            style={{ color: "var(--theme-primary-text)" }}
        >
            {children}
        </p>
    )
}

export default Paragraph
