import { Story } from '@storybook/react'
import { H1, H2, H3, H4, Paragraph, Text } from '../../'

export default {
  title: 'Primitives/Typography',
  component: Text,
  argTypes: {
    color: { control: 'color' },
    fontSize: { type: 'number' },
    fontWeight: {
      control: {
        type: 'select',
        options: ['normal', 'bold', 400, 500, 600, 700],
      },
    },
  },
}

type TextStory = Story<{ children: string }>

export const InlineText: TextStory = props => <Text {...props} />
InlineText.args = {
  children: 'stinodes-ui is pretty poggers',
}

export const ParagraphText: TextStory = props => <Paragraph {...props} />
ParagraphText.args = {
  children: 'stinodes-ui is pretty poggers',
}

export const Heading1: TextStory = props => <H1 {...props} />
Heading1.args = {
  children: 'stinodes-ui',
}

export const Heading2: TextStory = props => <H2 {...props} />
Heading2.args = {
  children: 'stinodes-ui',
}

export const Heading3: TextStory = props => <H3 {...props} />
Heading3.args = {
  children: 'stinodes-ui',
}

export const Heading4: TextStory = props => <H4 {...props} />
Heading4.args = {
  children: 'stinodes-ui',
}
