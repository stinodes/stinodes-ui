import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  SelectHTMLAttributes,
} from 'react'
import styled from '@emotion/styled'
import { Icon } from '@stinodes-ui/icons'
import { Input } from '@stinodes-ui/input'
import { Portal } from '@stinodes-ui/portal'
import { Card } from '@stinodes-ui/card'
import { themeColor, themeFont } from '@stinodes-ui/theme'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  > input {
    padding-right: 32px;
  }
`
const ChevronContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 16px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
`

const Chevron = styled(Icon)<{ open: boolean }>`
  transform: rotate(${props => (props.open ? '180deg' : '0deg')});
  transition: background 0.3s ease, transform 0.3s ease;
`

const PopOut = styled(Card)<{ top: number; left: number; width: number }>`
  position: fixed;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  width: ${props => props.width}px;
  background: ${themeColor('lights.4')};
  flex-direction: column;
  max-height: 264px;
  overflow-y: auto;
`
const Option = styled.button`
  display: flex;
  font-family: ${themeFont};
  font-size: 16px;
  color: ${themeColor('darks.1')};
  border: none;
  outline: none;
  padding: 8px 16px;
  background: transparent;
  transition: background 0.3s ease;
  align-items: flex-start;
  border-radius: inherit;
  :hover {
    background: ${themeColor('lights.2')};
  }
`

type Props = {
  error?: boolean
  highlight?: boolean
  border?: string
  onSelect: (value: any) => any
  placeholder?: string
  options: (string | { value: any; label: string })[]
  value: any
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onSelect'>

export const Select = ({
  placeholder,
  options,
  error,
  value,
  highlight,
  border,
  ...props
}: Props) => {
  const wrapperRef = useRef<null | HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  const wrapperMeasurements = useMemo(() => {
    if (open) return wrapperRef.current?.getBoundingClientRect()
    return null
  }, [wrapperRef, open])

  useEffect(() => {
    if (open) {
      const onClickOutside = () => setOpen(false)
      document.addEventListener('click', onClickOutside)
      return () => document.removeEventListener('click', onClickOutside)
    }
  }, [open, setOpen])

  const parsedOptions = useMemo(
    () =>
      options.map(option =>
        typeof option === 'string' ? { label: option, value: option } : option,
      ),
    [options],
  )
  const selectedOption = useMemo(() => {
    if (value) {
      return parsedOptions.find(option => option.value === value)
    }
  }, [value, parsedOptions])

  const inputProps = {
    error,
    highlight,
    border,
    value: selectedOption?.label || placeholder,
  }

  return (
    <Wrapper ref={wrapperRef}>
      <Input {...inputProps} readOnly onClick={() => setOpen(!open)} />
      <ChevronContainer>
        <Chevron open={open} icon="chevron-down" />
      </ChevronContainer>
      {open && wrapperMeasurements && (
        <Portal>
          <PopOut
            border
            shadow
            py={1}
            top={wrapperMeasurements.top + wrapperMeasurements.height + 6}
            left={wrapperMeasurements.left}
            width={wrapperMeasurements.width}>
            {parsedOptions.map(({ label, value }) => (
              <Option onClick={() => props.onSelect(value)}>{label}</Option>
            ))}
          </PopOut>
        </Portal>
      )}
    </Wrapper>
  )
}
