import { ComponentPropsWithoutRef, ElementType } from 'react'
import { Flex } from './Flex'
import { Input, Label, TextArea } from './Input'
import { Select } from './Select'
import { Text } from './Typography'

export type FieldProps<C extends ElementType> = {
  component: C

  label?: string
  error?: null | boolean | string
  help?: null | string
} & ComponentPropsWithoutRef<C>

export const Field = function <C extends ElementType>({
  component: InputComponent,
  ...props
}: FieldProps<C>) {
  const { label, error, help, ...inputProps } = props
  return (
    <Flex flexDirection="column">
      {label && (
        <Flex mb="2px">
          <Label>{label}</Label>
        </Flex>
      )}
      <InputComponent
        {...inputProps}
        border={!!error && 'error'}
        highlight={props.highlight || !!props.error}
      />
      {error && typeof error === 'string' ? (
        <Text mt="2px" fontSize={12} color="error">
          {error}
        </Text>
      ) : help ? (
        <Text mt="2px" fontSize={12} color="darks.4">
          {help}
        </Text>
      ) : null}
    </Flex>
  )
}

type TextFieldProps = Omit<FieldProps<typeof Input>, 'component'>
export const TextField = (props: TextFieldProps) => {
  return <Field {...props} component={Input} />
}

type TextAreaFieldProps = Omit<FieldProps<typeof TextArea>, 'component'>
export const TextAreaField = (props: TextAreaFieldProps) => {
  return <Field {...props} component={TextArea} />
}

type SelectFieldProps = Omit<FieldProps<typeof Select>, 'component'>
export const SelectField = (props: SelectFieldProps) => {
  return <Field {...props} component={Select} />
}
