import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@jmoura-dev-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, porro odio aut blanditiis debitis illo ab quod voluptates corrupti, voluptas autem numquam nihil incidunt earum dolorem minus? Distinctio, asperiores deleniti!',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Heading',
    as: 'strong',
  },
}
