import React from "react";
import { Field, Radio, Label } from "./styles";

type InputRadioProps =  {
	name: string;
  value: string;
  setThickness: (value: string) => void
}  &  React.InputHTMLAttributes<HTMLInputElement>

export function InputRadio({ value, setThickness, ...props}: InputRadioProps) {
  return(
    <Field>
      <Radio>
        <input 
          id={value}
          value={value} 
          type="radio" 
          {...props} 
          onChange={(event) => setThickness(event.target.value)}   
        />   
        <div className="background">
          <div className="outer-circle"></div>
          <div className="inner-circle"></div>
        </div>
        <div className="ripple"></div>        
      </Radio> 
      <Label htmlFor={value}>{value}</Label>
    </Field>
  );
}