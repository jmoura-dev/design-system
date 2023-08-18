import { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps, Button } from '@jmoura-dev-ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    children: <Button>Testando o elemento Tooltip</Button>,
    content: '21 de outubro - Indisponível',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
