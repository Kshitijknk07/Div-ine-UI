import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Badge component variants configuration using class-variance-authority
 * @see https://cva.style/docs
 */
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        success:
          "border-transparent bg-[#00ADB5]/20 text-[#00ADB5] border-[#00ADB5]/50 hover:bg-[#00ADB5]/30",
        warning:
          "border-transparent bg-[#FFB800]/20 text-[#FFB800] border-[#FFB800]/50 hover:bg-[#FFB800]/30",
        error:
          "border-transparent bg-[#FF3B30]/20 text-[#FF3B30] border-[#FF3B30]/50 hover:bg-[#FF3B30]/30",
        info: "border-transparent bg-[#007AFF]/20 text-[#007AFF] border-[#007AFF]/50 hover:bg-[#007AFF]/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

/**
 * Badge component props interface
 * @extends React.HTMLAttributes<HTMLDivElement>
 * @extends VariantProps<typeof badgeVariants>
 */
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /** Optional icon to display before the badge text */
  icon?: React.ReactNode;
}

/**
 * A versatile badge component that can be used to highlight status, labels, or counts.
 *
 * @example
 * ```tsx
 * <Badge variant="success">Active</Badge>
 * ```
 *
 * @example
 * ```tsx
 * <Badge variant="warning" icon={<AlertIcon />}>
 *   Warning
 * </Badge>
 * ```
 */
function Badge({ className, variant, icon, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
