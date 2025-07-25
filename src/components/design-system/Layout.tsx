import { cn } from "@/lib/utils";

// Container component
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Container({
    size = "lg",
    className,
    children,
    ...props
}: ContainerProps) {
    const sizes = {
        sm: "max-w-3xl",
        md: "max-w-5xl",
        lg: "max-w-6xl",
        xl: "max-w-7xl",
        full: "max-w-full",
    };

    return (
        <div
            className={cn(
                "mx-auto w-full px-4 sm:px-6 lg:px-8",
                sizes[size],
                className
            )}
            {...props}>
            {children}
        </div>
    );
}

// Section component with unified spacing
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    spacing?: "sm" | "md" | "lg";
    variant?: "default" | "dark" | "light" | "light-alt";
}

export function Section({
    spacing = "lg",
    variant = "default",
    className,
    children,
    ...props
}: SectionProps) {
    const spacings = {
        sm: "py-12",
        md: "py-16",
        lg: "py-20",
    };

    const variants = {
        default: "",
        dark: "bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900",
        light: "bg-white",
        "light-alt": "bg-slate-50",
    };

    return (
        <section
            className={cn(spacings[spacing], variants[variant], className)}
            {...props}>
            {children}
        </section>
    );
}

// Grid component
interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    cols?: 1 | 2 | 3 | 4;
    gap?: "sm" | "md" | "lg";
}

export function Grid({
    cols = 3,
    gap = "md",
    className,
    children,
    ...props
}: GridProps) {
    const columns = {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    };

    const gaps = {
        sm: "gap-4",
        md: "gap-6",
        lg: "gap-8",
    };

    return (
        <div
            className={cn("grid", columns[cols], gaps[gap], className)}
            {...props}>
            {children}
        </div>
    );
}

// Card component with unified design
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "dark" | "light" | "glass";
    hover?: boolean;
}

export function Card({
    variant = "default",
    hover = true,
    className,
    children,
    ...props
}: CardProps) {
    const baseStyles =
        "rounded-xl p-8 flex flex-col h-full transition-all duration-300 relative overflow-hidden";

    const variants = {
        default: "bg-white border border-slate-200",
        dark: "bg-slate-800/50 backdrop-blur-sm border border-slate-700",
        light: "bg-white shadow-lg border border-slate-100",
        glass: "bg-white/10 backdrop-blur-md border border-white/20",
    };

    const hoverStyles = {
        default: "hover:border-blue-300 hover:shadow-xl",
        dark: "hover:border-blue-500/50",
        light: "hover:shadow-2xl hover:-translate-y-1",
        glass: "hover:bg-white/20 hover:border-white/30",
    };

    return (
        <div
            className={cn(
                baseStyles,
                variants[variant],
                hover && hoverStyles[variant],
                "group",
                className
            )}
            {...props}>
            {/* Gradient accent line */}
            {(variant === "dark" || variant === "default") && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
            {children}
        </div>
    );
}
