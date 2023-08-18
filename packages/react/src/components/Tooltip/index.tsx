import * as TooltipTags from '@radix-ui/react-tooltip'
import { ComponentProps, ElementType, ReactNode } from 'react'

export interface TooltipProps extends ComponentProps<typeof TooltipTags.Root> {
  as?: ElementType
  content: string | ReactNode
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipTags.Provider {...props}>
      <TooltipTags.Root>
        <TooltipTags.Trigger asChild>{children}</TooltipTags.Trigger>
        <TooltipTags.Portal>
          <TooltipTags.Content>
            <TooltipTags.Arrow />
            {content}
          </TooltipTags.Content>
        </TooltipTags.Portal>
      </TooltipTags.Root>
    </TooltipTags.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
