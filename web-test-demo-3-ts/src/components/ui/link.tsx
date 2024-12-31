import * as React from "react"
import { Link as RouterLink } from "react-router-dom"
import { cn } from "../../lib/utils"

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, href, children, ...props }, ref) => {
    return (
      <RouterLink
        to={href}
        className={cn(
          "text-primary underline-offset-4 hover:underline",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </RouterLink>
    )
  }
)
Link.displayName = "Link"

export { Link } 