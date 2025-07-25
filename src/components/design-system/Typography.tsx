import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Heading component with unified design
const headingVariants = cva("font-bold", {
    variants: {
        level: {
            h1: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
            h2: "text-2xl md:text-3xl lg:text-4xl",
            h3: "text-xl md:text-2xl",
            h4: "text-lg md:text-xl",
        },
        color: {
            white: "text-white",
            dark: "text-slate-900",
            gradient:
                "bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent",
            muted: "text-slate-300",
        },
        align: {
            left: "text-left",
            center: "text-center",
            right: "text-right",
        },
    },
    defaultVariants: {
        level: "h2",
        color: "dark",
        align: "left",
    },
});

interface HeadingProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
        VariantProps<typeof headingVariants> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Heading({
    as = "h2",
    level,
    color,
    align,
    className,
    children,
    ...props
}: HeadingProps) {
    const Component = as;
    return (
        <Component
            className={cn(headingVariants({ level, color, align }), className)}
            {...props}>
            {children}
        </Component>
    );
}

// Text component with unified colors
const textVariants = cva("", {
    variants: {
        size: {
            xs: "text-xs",
            sm: "text-sm",
            base: "text-base",
            lg: "text-lg",
            xl: "text-xl md:text-2xl",
        },
        color: {
            white: "text-white",
            dark: "text-slate-900",
            primary: "text-slate-100",
            secondary: "text-slate-300",
            muted: "text-slate-400",
            "slate-600": "text-slate-600",
            "slate-700": "text-slate-700",
            blue: "text-blue-500",
            cyan: "text-cyan-400",
        },
        weight: {
            normal: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold",
        },
    },
    defaultVariants: {
        size: "base",
        color: "dark",
        weight: "normal",
    },
});

interface TextProps
    extends React.HTMLAttributes<HTMLParagraphElement>,
        VariantProps<typeof textVariants> {
    as?: "p" | "span" | "div";
}

export function Text({
    as = "p",
    size,
    color,
    weight,
    className,
    children,
    ...props
}: TextProps) {
    const Component = as;
    return (
        <Component
            className={cn(textVariants({ size, color, weight }), className)}
            {...props}>
            {children}
        </Component>
    );
}

// Label component for forms and small texts
export function Label({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
    return (
        <span
            className={cn("text-sm font-medium text-slate-700", className)}
            {...props}>
            {children}
        </span>
    );
}
