import { HTMLAttributes } from 'react'
import styled, { StyledComponent } from '@emotion/styled'

import { themeColor } from '../theme'
import { Box, BoxProps } from './Box'

type TableRowProps = { border?: boolean } & BoxProps
export const TableRow: StyledComponent<
  TableRowProps,
  HTMLAttributes<HTMLTableRowElement>
> = styled(Box.withComponent('tr'))<TableRowProps>`
  border-spacing: 0;
  td,
  th {
    border-bottom: ${themeColor('lights.2')}
      ${props => (props.border ? 1 : 0)}px solid;
  }
`
TableRow.displayName = 'TableRow'

export const Cell: StyledComponent<
  BoxProps,
  HTMLAttributes<HTMLTableCellElement>
> = styled(Box.withComponent('td'))<any>`
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

export const TableHeader: StyledComponent<
  BoxProps,
  HTMLAttributes<HTMLTableHeaderCellElement>
> = styled(Box.withComponent('th'))`
  line-height: 28px;
  padding: 16px 10px 8px 10px;
  text-align: left;
  margin-bottom: 4px;
  margin-right: 1px;
  font-size: 14px;
  font-weight: normal;
`
TableHeader.displayName = 'TableHeader'
TableHeader.defaultProps = {
  color: 'darks.4',
}

const StyledTable: StyledComponent<
  BoxProps,
  HTMLAttributes<HTMLTableElement>
> = styled(Box.withComponent('table'))<any>`
  border-collapse: collapse;
`

type TableProps = BoxProps & HTMLAttributes<HTMLTableElement>
export const Table = (props: TableProps) => {
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
