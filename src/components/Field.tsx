import { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react'
import { Flex } from './Flex'
import { Input, Label, TextArea } from './Input'
import { Select } from './Select'
import { Text } from './Typography'

export type FieldProps = {
  label?: string
  error?: null | boolean | string
  help?: null | string
}

export const Field = ({
  label,
  error,
  help,
  children,
}: FieldProps & { children: ReactNode }) => {
  return (
    <Flex flexDirection="column">
      {label && (
        <Flex mb="2px">
          <Label>{label}</Label>
        </Flex>
      )}
      {children}
      {error && typeof error === 'string' ? (
        <Text mt="2px" fontSize={12} color="error">
          {error}
        </Text>
      ) : help ? (
        <Text mt="2px" fontSize={12} color="typography.4">
          {help}
        </Text>
      ) : null}
    </Flex>
  )
}
Field.displayName = 'Field'

type TextFieldProps = ComponentPropsWithoutRef<typeof Input> & FieldProps
export const TextField: ComponentType<TextFieldProps> = ({
  label,
  error,
  help,
  ...props
}) => {
  return (
    <Field label={label} error={error} help={help}>
      <Input
        {...props}
        border={!!error ? 'error' : props.border}
        highlight={!!error || props.highlight}
      />
    </Field>
  )
}
TextField.displayName = 'TextField'

type TextAreaFieldProps = ComponentPropsWithoutRef<typeof TextArea> & FieldProps
export const TextAreaField: ComponentType<TextAreaFieldProps> = ({
  label,
  error,
  help,
  ...props
}) => {
  return (
    <Field label={label} error={error} help={help}>
      <TextArea
        {...props}
        border={!!error ? 'error' : props.border}
        highlight={!!error || props.highlight}
      />
    </Field>
  )
}
TextAreaField.displayName = 'TextAreaField'

type SelectFieldProps = ComponentPropsWithoutRef<typeof Select> & FieldProps
export const SelectField: ComponentType<SelectFieldProps> = ({
  label,
  error,
  help,
  ...props
}) => {
  return (
    <Field label={label} error={error} help={help}>
      <Select
        {...(props as any)}
        border={!!error ? 'error' : props.border}
        highlight={!!error || props.highlight}
      />
    </Field>
  )
}
SelectField.displayName = 'SelectField'
