import React from 'react'

type SecondaryButtonType = {
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode
}


const SecondaryButton = ({ className, children, onClick }: SecondaryButtonType) => {
    return (
        <button className={`${className} flex gap-2 items-center justify-center rounded-md cursor-pointer transition-all border text-sm py-2 px-4  hover:border-primary! hover:text-primary!`}
            style={{
                color: "var(--theme-social-text)",
                borderColor: "var(--theme-social-border)",
            }}>
            {children}
        </button>

    )
}

export default SecondaryButton