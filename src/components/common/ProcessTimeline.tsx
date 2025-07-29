'use client'

import {motion} from 'framer-motion'

export function AnimatedTimeline() {
    return (
        <>
            {/* Animated Progress Line - Unified gradient */}
            <motion.div
                className="absolute left-0 h-1 gradient-main rounded-full shadow-lg shadow-blue-500/30"
                initial={{width: 0}}
                whileInView={{width: '100%'}}
                transition={{duration: 2.5, ease: "easeInOut"}}
                viewport={{once: true}}
                style={{top: 0}}
            />

            {/* Glowing dot animation */}
            <motion.div
                className="absolute w-2 h-2 rounded-full shadow-glow-cyan"
                style={{
                    background: 'radial-gradient(circle, #00D4FF 0%, #0066FF 100%)',
                    top: '-2px'
                }}
                initial={{left: 0}}
                whileInView={{left: 'calc(100% - 8px)'}}
                transition={{
                    duration: 2.5,
                    ease: "easeInOut",
                    delay: 0.5
                }}
                viewport={{once: true}}
            />
        </>
    )
}

export function TimelineDot({index}: { index: number }) {
    return (
        <motion.div
            className="w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow-md"
            initial={{scale: 0}}
            whileInView={{scale: 1}}
            transition={{
                duration: 0.3,
                delay: 0.5 + (index * 0.4)
            }}
            viewport={{once: true}}
        />
    )
}