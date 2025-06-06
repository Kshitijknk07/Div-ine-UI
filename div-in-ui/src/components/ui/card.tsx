import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Card component props interface
 */
interface CardProps extends React.ComponentProps<"div"> {
  /** Additional CSS class names */
  className?: string;
}

/**
 * A container component that provides a consistent card layout with various sub-components.
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Card Title</CardTitle>
 *     <CardDescription>Card Description</CardDescription>
 *   </CardHeader>
 *   <CardContent>Content goes here</CardContent>
 *   <CardFooter>Footer content</CardFooter>
 * </Card>
 * ```
 */
function Card({ className, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  );
}

/**
 * CardHeader component props interface
 */
interface CardHeaderProps extends React.ComponentProps<"div"> {
  /** Additional CSS class names */
  className?: string;
}

/**
 * Header section of the card component
 */
function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

/**
 * CardTitle component props interface
 */
interface CardTitleProps extends React.ComponentProps<"div"> {
  /** Additional CSS class names */
  className?: string;
}

/**
 * Title component for the card header
 */
function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

/**
 * CardDescription component props interface
 */
interface CardDescriptionProps extends React.ComponentProps<"div"> {
  /** Additional CSS class names */
  className?: string;
}

/**
 * Description component for the card header
 */
function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

/**
 * CardAction component props interface
 */
interface CardActionProps extends React.ComponentProps<"div"> {
  /** Additional CSS class names */
  className?: string;
}

/**
 * Action component for the card header
 */
function CardAction({ className, ...props }: CardActionProps) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

/**
 * CardContent component props interface
 */
interface CardContentProps extends React.ComponentProps<"div"> {
  /** Additional CSS class names */
  className?: string;
}

/**
 * Main content section of the card
 */
function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

/**
 * CardFooter component props interface
 */
interface CardFooterProps extends React.ComponentProps<"div"> {
  /** Additional CSS class names */
  className?: string;
}

/**
 * Footer section of the card
 */
function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
