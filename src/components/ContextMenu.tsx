import React, {
  ComponentProps,
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ComponentType,
  forwardRef,
  ReactNode,
} from 'react'
import styled from '@emotion/styled'
import { typography } from 'styled-system'
import { Button, FlexButton } from './Button'
import { PopOut } from './PopOut'
import { Card } from './Card'
import { Icon } from './Icons'

const ContextButtonComponent: ComponentType<
  ComponentProps<typeof Button>
> = forwardRef<HTMLButtonElement>((props, ref) => (
  <Button
    ref={ref}
    size="circle"
    bg="lights.4"
    outlineColor="primary"
    {...props}
  />
))

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
export const ContextButton = ({
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
ContextButton.defaultProps = {
  underlay: true,
  align: 'right',
}

type ContextItemProps = {
  children: ReactNode
  onClick: () => any
}

const Item = styled(FlexButton)(typography)
Item.defaultProps = {
  px: 2,
  py: 2,
  bg: 'lights.4',
  color: 'darks.1',
  fontSize: 16,
  outlineColor: 'transparent',
}
ContextButton.Item = Item
