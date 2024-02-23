import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@luanccp-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, the heading will always be a `h2`, however we can change this using the `as` property',
      },
    },
  },
}
