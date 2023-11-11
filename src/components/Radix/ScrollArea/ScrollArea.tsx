import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import clsx from "clsx"
import {forwardRef} from 'react'
import { twMerge } from "tailwind-merge"

const ScrollArea = forwardRef<
React.ElementRef<typeof ScrollAreaPrimitive.Root>,
React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => {
    return (
        <ScrollAreaPrimitive.Root
            ref={ref}
            className={clsx("relative overflow-hidden", className)}
            {...props}
        >
        <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
          {children}
        </ScrollAreaPrimitive.Viewport>
        <ScrollBar orientation="vertical"/>
        <ScrollBar orientation="horizontal"/>
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaPrimitive.Root>
    )
})
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => {
  return (
    <ScrollAreaPrimitive.Scrollbar
      ref={ref}
      orientation={orientation}
      className={clsx(
        "flex touch-none select-none transition-colors bg-zinc-200",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent p-[1px]",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb
        className={clsx(
          "relative rounded-full bg-border bg-zinc-800",
          orientation === "vertical" && "flex-1"
        )}
      />
    </ScrollAreaPrimitive.Scrollbar>
  )
})
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName


export default ScrollArea