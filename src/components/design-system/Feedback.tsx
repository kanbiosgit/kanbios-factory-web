import {cn} from '@/lib/utils'

// Badge component with unified design
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
}

export function Badge({variant = 'default', size = 'md', className, children, ...props}: BadgeProps) {
    const baseStyles = 'inline-flex items-center rounded-full font-medium transition-all duration-200'

    const variants = {
        default: 'bg-slate-100 text-slate-700 border border-slate-200',
        primary: 'bg-blue-50 text-blue-700 border border-blue-200',
        secondary: 'bg-cyan-50 text-cyan-700 border border-cyan-200',
        outline: 'bg-transparent text-blue-600 border border-blue-600',
    }

    const sizes = {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base'
    }

    return (
        <span
            className={cn(
                baseStyles,
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </span>
    )
}

// Chip component for tags with unified design
export function Chip({className, children, ...props}: React.HTMLAttributes<HTMLSpanElement>) {
    return (
        <span
            className={cn(
                'inline-flex items-center px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full text-xs border border-slate-200 hover:bg-slate-200 transition-colors cursor-default',
                className
            )}
            {...props}
        >
            {children}
        </span>
    )
}

// Progress indicator
interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number
    max?: number
    variant?: 'default' | 'gradient'
}

export function Progress({ value, max = 100, variant = 'default', className, ...props }: ProgressProps) {
    const percentage = Math.min(Math.max(0, (value / max) * 100), 100)

    const variants = {
        default: 'bg-blue-500',
        gradient: 'bg-gradient-to-r from-blue-500 to-cyan-400',
    }

    return (
        <div className={cn('w-full bg-slate-200 rounded-full h-2 overflow-hidden', className)} {...props}>
            <div
                className={cn('h-full transition-all duration-500 ease-out', variants[variant])}
                style={{ width: `${percentage}%` }}
            />
        </div>
    )
}

// Alert component
interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'info' | 'success' | 'warning' | 'error'
}

export function Alert({ variant = 'info', className, children, ...props }: AlertProps) {
    const variants = {
        info: 'bg-blue-50 text-blue-900 border-blue-200',
        success: 'bg-green-50 text-green-900 border-green-200',
        warning: 'bg-amber-50 text-amber-900 border-amber-200',
        error: 'bg-red-50 text-red-900 border-red-200',
    }

    return (
        <div
            className={cn(
                'rounded-lg border p-4',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}