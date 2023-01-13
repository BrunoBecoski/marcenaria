import { ChangeEvent, InputHTMLAttributes, MutableRefObject, useRef } from 'react';

import { TextFieldContainer, Border, Label, Input, Span } from './styles';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement>{
  label?: string;
  name: string;
  errorMessage?: string | undefined;
  getValues?: any;
  setValue?: any;
}

export function TextField({ label, name, errorMessage, ...props }: TextFieldProps) {
  const inputRef = useRef() as  MutableRefObject<HTMLInputElement>

  return (
    <TextFieldContainer>
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

export function TextFieldCurrency({ label, name, errorMessage, getValues, setValue, ...props }: TextFieldProps) { 
  const inputRef = useRef() as  MutableRefObject<HTMLInputElement>

  function formatPrice(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    
    const valueInt = value
    .replace(/\D+/g, '')
    .replace(/\b0+/g, '')
    .trim()
    
    let valueFormatted = ''

    const valueIntLenght = valueInt.length

    switch (valueIntLenght) {
      case 0:
        valueFormatted = ''
        break;

      case 1:
        valueFormatted = valueInt
        break;
      
      case 2:
        valueFormatted = valueInt
        break;
        
      default:
        valueFormatted = `${
          valueInt.substring(0, valueIntLenght-2).replace(/\d(?=(?:\d{3})+$)/g, '$&.')
          + ',' +
          valueInt.substring(valueIntLenght-2)
        }`
        break;
    } 

    setValue('price', `R$ ${valueFormatted}`)
  }

  return (
    <TextFieldContainer>
      <Border onClick={() => inputRef.current.focus()}>
        <Label htmlFor={name}>
          {label}
        </Label>

        <Input
          ref={inputRef}
          id={name}
          placeholder=" "
          inputMode="numeric"
          data-invalid={!!errorMessage}
          {...props}
          onChange={formatPrice}
        />
      </Border>
      <Span>{errorMessage}</Span> 
    </TextFieldContainer>
  )
}