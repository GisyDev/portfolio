
import React from "react"
import { motion } from "framer-motion"

export interface AuroraBackgroundProps {
  /** Extra wrapper classes */
  className?: string
  /** Content to render on top of the background */
  children?: React.ReactNode
  /** Number of "star" points */
  starCount?: number
  /** Pulse animation duration in seconds */
  pulseDuration?: number
  /** ARIA label for the animated background */
  ariaLabel?: string
}

const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  className = "",
  children,
  starCount = 200,
  pulseDuration = 10,
  ariaLabel = "Animated aurora background",
}) => {
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={`relative flex flex-col items-center justify-center overflow-hidden min-h-screen ${className}`}
      style={{ backgroundColor: "var(--theme-bg-app)", color: "var(--theme-title-text)", transition: "background-color 0.3s ease, color 0.3s ease" }}
    >
      {/* Background layers (hidden from screen readers) */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Pulsing radial gradients */}
        

        {/* Twinkling stars (hidden in light mode via opacity variable) */}
        {Array.from({ length: starCount }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{ backgroundColor: "white" }}
            initial={{
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
              opacity: 0,
            }}
            animate={{
              opacity: [0, Math.random() * 0.8 * (1), 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Foreground content */}
      {children}
    </div>
  )
}

export default AuroraBackground
