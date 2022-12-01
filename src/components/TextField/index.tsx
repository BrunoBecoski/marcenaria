import { ChangeEvent, InputHTMLAttributes, MutableRefObject, useEffect, useRef, useState } from 'react';

import { TextFieldContainer, Border, Label, Input, Span } from './styles';

interface TextFieldProps extends  InputHTMLAttributes<HTMLInputElement>{
  label?: string;
  name: string;
  errorMessage?: string | undefined;
  setValue?: any;
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

export function TextFieldCurrency({ label, name, errorMessage, setValue, ...props }: TextFieldProps) { 
  const [price, setPrice] = useState('');
  const [inputValue, setInputValue] = useState(0)

  const inputRef = useRef() as  MutableRefObject<HTMLInputElement>

  function formatPrice(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    
    const valueInt = value
    .replace(/[R$,\.a-zA-z]+/g, '')
    .replace(/\b0+/g, '')
    .trim()
    
    setInputValue(Number(valueInt))

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

    setPrice(`R$ ${valueFormatted}`)
  }

  useEffect(() => {
      setValue('price', inputValue)
  }, [inputValue])

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
          onChange={formatPrice}
          value={price}
        />

        <input
          style={{ display: 'none' }}
          {...props}
        />
      </Border>
      <Span>{errorMessage}</Span> 
    </TextFieldContainer>
  )
}