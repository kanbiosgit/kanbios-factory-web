'use client'

import {motion, type MotionProps} from 'framer-motion'
import {type ReactNode} from 'react'

interface AnimationWrapperProps extends MotionProps {
    children: ReactNode
    className?: string
}

export function FadeIn({children, className, ...props}: AnimationWrapperProps) {
    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export function SlideIn({children, className, direction = 'left', ...props}: AnimationWrapperProps & { direction?: 'left' | 'right' | 'up' | 'down' }) {
    const variants = {
        left: {x: -30},
        right: {x: 30},
        up: {y: -30},
        down: {y: 30}
    }

    return (
        <motion.div
            initial={{opacity: 0, ...variants[direction]}}
            whileInView={{opacity: 1, x: 0, y: 0}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export function ScaleIn({children, className, ...props}: AnimationWrapperProps) {
    return (
        <motion.div
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export function StaggerChildren({children, className, ...props}: AnimationWrapperProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.1
                    }
                }
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export function StaggerItem({children, className, ...props}: AnimationWrapperProps) {
    return (
        <motion.div
            variants={{
                hidden: {opacity: 0, y: 20},
                visible: {opacity: 1, y: 0}
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    )
}