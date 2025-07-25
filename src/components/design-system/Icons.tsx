import { Check, X, AlertCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
    size?: "sm" | "md" | "lg";
    color?:
        | "default"
        | "primary"
        | "secondary"
        | "success"
        | "warning"
        | "error";
}

export function Icon({
    size = "md",
    color = "default",
    className,
    children,
    ...props
}: IconProps) {
    const sizes = {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
    };

    const colors = {
        default: "text-slate-600",
        primary: "text-blue-500",
        secondary: "text-cyan-400",
        success: "text-green-500",
        warning: "text-amber-500",
        error: "text-red-500",
    };

    return (
        <span className={cn(sizes[size], colors[color], className)} {...props}>
            {children}
        </span>
    );
}

// Specific icon components
export function CheckIcon({
    className,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
    return (
        <Icon color="success" className={cn("mr-2", className)} {...props}>
            <Check aria-label="validé" />
        </Icon>
    );
}

export function ErrorIcon({
    className,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
    return (
        <Icon color="error" className={cn("mr-2", className)} {...props}>
            <X aria-label="erreur" />
        </Icon>
    );
}

export function WarningIcon({
    className,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
    return (
        <Icon color="warning" className={cn("mr-2", className)} {...props}>
            <AlertCircle aria-label="attention" />
        </Icon>
    );
}

export function InfoIcon({
    className,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
    return (
        <Icon color="primary" className={cn("mr-2", className)} {...props}>
            <Info aria-label="information" />
        </Icon>
    );
}

// Icon wrapper for consistent styling
interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "primary" | "glass";
    size?: "sm" | "md" | "lg";
    shape?: "square" | "rounded" | "circle";
}

export function IconWrapper({
    variant = "default",
    size = "md",
    shape = "rounded",
    className,
    children,
    ...props
}: IconWrapperProps) {
    const sizes = {
        sm: "w-10 h-10",
        md: "w-12 h-12",
        lg: "w-14 h-14",
    };

    const shapes = {
        square: "rounded-lg",
        rounded: "rounded-xl",
        circle: "rounded-full",
    };

    const variants = {
        default: "bg-slate-100 text-slate-700",
        primary:
            "bg-gradient-to-br from-blue-500/10 to-cyan-400/10 border border-blue-500/20 text-blue-500",
        glass: "bg-white/10 backdrop-blur-sm border border-white/20 text-white",
    };

    return (
        <div
            className={cn(
                "flex items-center justify-center transition-all duration-300",
                sizes[size],
                shapes[shape],
                variants[variant],
                "group-hover:scale-110",
                className
            )}
            {...props}>
            {children}
        </div>
    );
}
