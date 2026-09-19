import React from 'react'

type ParagraphType = {
    children: React.ReactNode
}

const Paragraph = ({ children }: ParagraphType) => {
    return (
        <p className='text-mute font-medium'>{children}</p>
    )
}

export default Paragraph