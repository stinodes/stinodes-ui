import { ButtonHTMLAttributes, ComponentPropsWithRef, ReactNode } from 'react'
import styled, { StyledComponent } from '@emotion/styled'
import { typography, TypographyProps } from 'styled-system'
import { Button, FlexButton, FlexButtonProps } from './Button'
import { PopOut } from './PopOut'
import { Card } from './Card'
import { Icon } from './Icons'

const ContextCard = styled(Card)`
  overflow-y: auto;
`
ContextCard.defaultProps = {
  width: 250,
  maxHeight: 250,
  flexDirection: 'column',
  shadow: true,
  border: true,
  bg: 'lights.4',
}

type ContextMenuProps = {
  underlay?: boolean
  align?: 'left' | 'right' | 'center'
  children: ReactNode
  cardProps?: ComponentPropsWithRef<typeof ContextCard>
  buttonProps?: ComponentPropsWithRef<typeof Button>
}
export const ContextMenu = ({
  children,
  cardProps,
  buttonProps,
  ...props
}: ContextMenuProps) => {
  return (
    <PopOut
      {...props}
      trigger="click"
      component={
        <Button
          size="circle"
          bg="lights.4"
          color="darks.1"
          outlineColor="primary"
          {...buttonProps}
        />
      }
      content={<ContextCard {...cardProps}>{children}</ContextCard>}>
      <Icon icon="more-vertical" />
    </PopOut>
  )
}
ContextMenu.displayName = 'ContextButton'
ContextMenu.defaultProps = {
  underlay: true,
  align: 'right',
}

const Item: StyledComponent<
  FlexButtonProps & TypographyProps,
  ButtonHTMLAttributes<HTMLButtonElement>
> = styled(FlexButton)(typography)
Item.displayName = 'ContextMenu.Item'
Item.defaultProps = {
  px: 2,
  py: 2,
  bg: 'lights.4',
  color: 'darks.1',
  fontSize: 16,
  outlineColor: 'transparent',
}
ContextMenu.Item = Item
