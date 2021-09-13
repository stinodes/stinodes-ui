import { ComponentPropsWithoutRef } from 'react'
import styled from '@emotion/styled'

import { themeColor } from '../theme'
import { Box } from './Box'

export const TableRow = styled(Box.withComponent('tr'))<{
  border?: boolean
}>`
  border-spacing: 0;
  td,
  th {
    border-bottom: ${themeColor('lights.2')}
      ${props => (props.border ? 1 : 0)}px solid;
  }
`
TableRow.displayName = 'TableRow'

export const Cell = styled(Box.withComponent('td'))`
  white-space: nowrap;
  text-align: left;
  line-height: 48px;
  padding: 0 10px;
  height: 100%;
`
Cell.displayName = 'Cell'
Cell.defaultProps = {
  color: 'darks.2',
  bg: 'white',
}

export const TableHeader = styled(Box.withComponent('th'))`
  line-height: 28px;
  padding: 16px 10px 8px 10px;
  text-align: left;
  margin-bottom: 4px;
  margin-right: 1px;
  font-size: 14px;
  font-weight: normal;
`
TableHeader.displayName = 'Header'
TableHeader.defaultProps = {
  color: 'darks.4',
}

const StyledTable = styled(Box.withComponent('table'))`
  border-collapse: collapse;
`

export const Table = (props: ComponentPropsWithoutRef<typeof StyledTable>) => {
  return <StyledTable {...props} />
}
Table.displayName = 'Table'
Table.defaultProps = {
  bg: 'lights.3',
  width: 1,
}

Table.Row = TableRow
Table.Header = TableHeader
Table.Cell = Cell
