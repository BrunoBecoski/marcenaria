import { InputHTMLAttributes, MutableRefObject, useRef } from 'react';

import { TextFieldContainer, Border, Label, Input, Span } from './styles';

interface TextFieldProps extends  InputHTMLAttributes<HTMLInputElement>{
  label?: string;
  name: string;
  errorMessage?: string | undefined ;
}

export function TextField({ label, name, errorMessage, ...props }: TextFieldProps) {
  const inputRef = useRef() as  MutableRefObject<HTMLInputElement>

  return (
    <TextFieldContainer >
      <Border onClick={() => inputRef.current.focus()}>
        <Label htmlFor={name}>
          {label}
        </Label>

        <Input
          ref={inputRef}
          id={name}
          placeholder=" "
          {...props}
          data-invalid={!!errorMessage}   
        />
      </Border>

      <Span>{errorMessage}</Span> 
    </TextFieldContainer>
  )
}