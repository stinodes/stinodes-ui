import React from 'react'
import { Text, Paragraph, H1, H2, H3, H4 } from '@stinodes-ui/typography'

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

export const InlineText = props => <Text {...props} />
InlineText.args = {
  children: 'stinodes-ui is pretty poggers',
}

export const ParagraphText = props => <Paragraph {...props} />
ParagraphText.args = {
  children: 'stinodes-ui is pretty poggers',
}

export const Heading1 = props => <H1 {...props} />
Heading1.args = {
  children: 'stinodes-ui',
}

export const Heading2 = props => <H2 {...props} />
Heading2.args = {
  children: 'stinodes-ui',
}

export const Heading3 = props => <H3 {...props} />
Heading3.args = {
  children: 'stinodes-ui',
}

export const Heading4 = props => <H4 {...props} />
Heading4.args = {
  children: 'stinodes-ui',
}
