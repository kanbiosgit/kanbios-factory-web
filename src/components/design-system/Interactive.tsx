import { cva, type VariantProps } from 'class-variance-authority'
import NextLink from 'next/link'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

// Button variants with unified design
const buttonVariants = cva(
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2',
    {
        variants: {
            variant: {
                primary: 'bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 text-white shadow-lg shadow-blue-500/25 focus:ring-blue-400',
                secondary: 'bg-white hover:bg-slate-50 text-blue-600 border-2 border-blue-500 focus:ring-blue-400',
                outline: 'border-2 border-slate-700 text-slate-700 hover:bg-slate-50 focus:ring-slate-400',
                ghost: 'bg-transparent hover:bg-white/10 text-white border-2 border-white/20 backdrop-blur-sm focus:ring-white/20',
                link: 'bg-transparent underline decoration-2 underline-offset-4 hover:decoration-4 text-blue-600',
            },
            size: {
                sm: 'px-4 py-2 text-sm',
                md: 'px-6 py-3',
                lg: 'px-8 py-4 text-lg',
            },
            fullWidth: {
                true: 'w-full',
                false: '',
            }
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
            fullWidth: false,
        }
    }
)

// Base props interface
interface BaseButtonProps extends VariantProps<typeof buttonVariants> {
    icon?: React.ReactNode
    children: React.ReactNode
    className?: string
}

// Button as button element
interface ButtonAsButton extends BaseButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    as?: 'button'
}

// Button as anchor element
interface ButtonAsLink extends BaseButtonProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
    as: 'a'
    href: string
}

// Combined type
type ButtonProps = ButtonAsButton | ButtonAsLink

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({ variant, size, fullWidth, icon, className, children, as = 'button', ...props }, ref) => {
        const classes = cn(
            buttonVariants({ variant, size, fullWidth }),
            variant === 'primary' && 'hover:scale-105 transform',
            className
        )

        if (as === 'a' && 'href' in props) {
            return (
                <a
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    className={classes}
                    {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                >
                    {children}
                    {icon && <span className="ml-2">{icon}</span>}
                </a>
            )
        }

        return (
            <button
                ref={ref as React.Ref<HTMLButtonElement>}
                className={classes}
                {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
            >
                {children}
                {icon && <span className="ml-2">{icon}</span>}
            </button>
        )
    }
)

Button.displayName = 'Button'

// Link component with unified design
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    variant?: 'default' | 'muted' | 'gradient'
    showArrow?: boolean
}

export function Link({ href, variant = 'default', showArrow = false, className, children, ...props }: LinkProps) {
    const variants = {
        default: 'text-blue-600 hover:text-cyan-500',
        muted: 'text-slate-600 hover:text-slate-900',
        gradient: 'bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent hover:from-blue-400 hover:to-cyan-300',
    }

    return (
        <NextLink
            href={href}
            className={cn(
                'inline-flex font-semibold transition-colors group underline decoration-2 underline-offset-4',
                variants[variant],
                className
            )}
            {...props}
        >
            {showArrow && (
                <ArrowRight className="me-2 h-4 w-4 inline transition-transform group-hover:translate-x-1" aria-hidden="true" />
            )}
            {children}
        </NextLink>
    )
}