import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@jmoura-dev-ignite-ui/react'

export default {
  title: 'Form/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: <Text>Testando o elemento box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
