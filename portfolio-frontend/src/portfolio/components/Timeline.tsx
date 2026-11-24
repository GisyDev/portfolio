import React, { type ReactNode } from 'react'

const Timeline = ({ children }: { children: ReactNode }) => {

    return (
        <div className='flex  w-full'>
            <span
                className="w-0.5 max-h-full me-6"
                style={{
                    background: "linear-gradient(180deg, transparent 0%, var(--theme-timeline-line) 10%, var(--theme-timeline-line) 85%, transparent 100%)"
                }}
            ></span>
            <div className='space-y-8 w-full'>
                {children}
            </div>
        </div>
    )
}

export default Timeline
