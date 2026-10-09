import React, { useState, type ReactNode } from 'react'
import HorizontalCard from './HorizontalCard'

const Timeline = ({ children }: { children: ReactNode }) => {

    return (
        <div className='flex'>
            <span className="w-0.5 max-h-full bg-[linear-gradient(180deg,transparent_0%,var(--color-zinc-800)_10%,var(--color-zinc-800)_85%,transparent_100%)]  me-6"></span>
            <div className='space-y-8 w-full'>
                {children}
            </div>
        </div>
    )
}

export default Timeline