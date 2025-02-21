import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-base motion-safe:transition-colors disabled:pointer-events-none [&_svg]:shrink-0 cursor-pointer disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-black text-white hover:bg-primary motion-safe:transition-colors",
        ghost: "hover:text-primary motion-safe:transition-colors",
      },
      size: {
        default: "h-11 px-4",
        small: "h-9 px-4",
        large: "h-12 px-6 text-lg/5",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
