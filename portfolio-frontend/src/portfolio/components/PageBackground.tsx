
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

export interface AuroraBackgroundProps {
  /** Extra wrapper classes */
  className?: string
  /** Content to render on top of the background */
  children?: React.ReactNode
  /** Number of "star" points */
  starCount?: number
  /** ARIA label for the animated background */
  ariaLabel?: string
}

const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  className = "",
  children,
  starCount = 1200,
  ariaLabel = "Animated aurora background",
}) => {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.getAttribute("data-theme") === "dark"
  )

  useEffect(() => {
    const themeObserver = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute("data-theme") === "dark")
    })

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    })

    return () => themeObserver.disconnect()
  }, [])

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={`relative isolate flex flex-col ${className}`}
      style={{
        backgroundColor: "var(--theme-bg-app)",
        color: "var(--theme-title-text)",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Background layers (hidden from screen readers) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {isDark && (
          Array.from({ length: starCount }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-0.5 w-0.5 rounded-full bg-white"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, Math.random() * 0.8, 0] }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))
        )}
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col">{children}</div>
    </div>
  )
}

export default AuroraBackground
