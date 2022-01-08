import React from "react";
import { Radio, Label } from "./styles";

type InputRadioProps =  {
	name: string;
  value: string;
  setThickness: (value: string) => void
}  &  React.InputHTMLAttributes<HTMLInputElement>

export function InputRadio({ value, setThickness, ...props}: InputRadioProps) {
  return(
    <Label htmlFor={value}>
      <Radio checked={props.checked}>
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
      {value}
    </Label>
  );
}