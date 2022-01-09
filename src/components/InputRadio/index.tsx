import React from "react";
import { Radio, Label } from "./styles";

type InputRadioProps =  {
	name: string;
  value: string;
  handleChange: (value: string) => void
}  &  React.InputHTMLAttributes<HTMLInputElement>

export function InputRadio({ value, handleChange, ...props}: InputRadioProps) {
  return(
    <Label htmlFor={value}>
      <Radio checked={props.checked}>
        <input 
          id={value}
          value={value} 
          type="radio" 
          {...props} 
          onChange={(event) => handleChange(event.target.value)}   
        />   
        <div className="background">
          <div className="ripple"></div>        
          <div className="outer-circle"></div>
          <div className="inner-circle"></div>
        </div>
      </Radio> 
      {value}
    </Label>
  );
}