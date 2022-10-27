import { InputHTMLAttributes } from 'react'

import { TextFieldContainer, Label, Input } from './styles';

interface TextFieldProps extends  InputHTMLAttributes<HTMLInputElement>{
  label?: string;
  name: string;
}

export function TextField({ label, name, ...props }: TextFieldProps) {
  return (
    <TextFieldContainer onClick={() => document.getElementById(name)?.focus()}>
      <Label htmlFor={name}>
        {label}
      </Label>

      <Input
        id={name}
        placeholder=" "
        {...props}
      />
    </TextFieldContainer>
  )
}