import { HTMLAttributes, useMemo, useState } from 'react'
import styled from '@emotion/styled'
import { Icon } from './Icons'
import { Input, InputProps } from './Input'
import { Card } from './Card'
import { themeColor, themeFont } from '../theme'
import { PopOut } from './PopOut'

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

const OptionsCard = styled(Card)`
  background: ${themeColor('lights.4')};
  flex-direction: column;
  max-height: 264px;
  overflow-y: auto;
  width: 100%;
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
type StringSelectInputProps = {
  value: null | string
  onChange: (value: string) => any
  options: string[]
}
type ValueSelectInputProps = {
  value: null | any
  onChange: (value: any) => any
  options: { value: any; label: string }[]
}

type Props = InputProps

type SafeHTMLProps = Omit<
  HTMLAttributes<HTMLSelectElement>,
  keyof StringSelectInputProps
>

export type SelectProps = Props &
  (StringSelectInputProps | ValueSelectInputProps) &
  SafeHTMLProps

export const Select = ({
  placeholder,
  options,
  value,
  highlight,
  border,
  onChange,
  ...props
}: SelectProps) => {
  const [visible, setVisible] = useState<boolean>(false)
  const parsedOptions = useMemo(() => {
    return options.map((option: string | { value: any; label: string }) =>
      typeof option === 'string' ? { value: option, label: option } : option,
    )
  }, [options])
  const selectedOption = useMemo(() => {
    if (value) {
      return parsedOptions.find(option => option.value === value)
    }
    return null
  }, [value, parsedOptions])

  const inputProps: InputProps & { value?: string } = {
    highlight,
    border,
    value: selectedOption?.label || placeholder,
    ...props,
  }

  return (
    <PopOut
      visible={visible}
      onClose={() => setVisible(false)}
      closeOnClick
      underlay
      align="center"
      trigger="click"
      content={
        <OptionsCard border shadow py={1}>
          {parsedOptions.map(({ label, value }) => (
            <Option onClick={() => onChange(value)}>{label}</Option>
          ))}
        </OptionsCard>
      }>
      <Wrapper>
        <Input {...inputProps} readOnly onClick={() => setVisible(true)} />
        <ChevronContainer>
          <Chevron open={false} icon="chevron-down" />
        </ChevronContainer>
      </Wrapper>
    </PopOut>
  )
}
