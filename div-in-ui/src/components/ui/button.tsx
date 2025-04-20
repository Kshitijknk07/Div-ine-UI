import * as React from "react"
import { forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:translate-y-[1px]",
  {
    variants: {
      variant: {
        default: 
          "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-md hover:shadow-lg hover:from-primary/95 hover:to-primary/85",
        outline: 
          "border border-input bg-background/40 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground",
        solid: 
          "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: 
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        success: 
          "bg-green-600 text-white hover:bg-green-700",
        secondary: 
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: 
          "hover:bg-accent hover:text-accent-foreground",
        link: 
          "text-primary underline-offset-4 hover:underline",
        soft: 
          "bg-primary/10 text-primary hover:bg-primary/20",
        glossy: 
          "bg-gradient-to-b from-white/10 to-white/5 border border-white/20 backdrop-blur-sm text-white shadow-inner",
      },
      size: {
        default: "h-9 px-4 py-2 rounded-md",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-9 w-9 rounded-md",
        pill: "h-9 px-6 rounded-full",
        "sm-pill": "h-8 px-4 rounded-full text-xs",
        "lg-pill": "h-11 px-8 rounded-full",
        "xl-pill": "h-12 px-10 rounded-full text-base",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        bounce: "animate-bounce",
        glow: "animate-glow",
      },
      iconPosition: {
        none: "",
        left: "flex-row",
        right: "flex-row-reverse"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
      iconPosition: "none"
    },
    compoundVariants: [
      {
        iconPosition: ["left", "right"],
        className: "gap-2"
      }
    ]
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    animation,
    iconPosition,
    loading = false,
    icon,
    children,
    disabled,
    ...props 
  }, ref) => {
    // Handle loading state
    const isDisabled = disabled || loading;
    
    return (
      <button
        className={cn(
          buttonVariants({ 
            variant, 
            size, 
            animation,
            iconPosition: icon ? (iconPosition || "left") : "none"
          }), 
          className
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
        )}
        {icon && iconPosition !== "right" && <span className={loading ? "invisible" : ""}>{icon}</span>}
        <span className={loading ? "invisible" : ""}>{children}</span>
        {icon && iconPosition === "right" && <span className={loading ? "invisible" : ""}>{icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants }
