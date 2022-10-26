import { TextFieldContainer, Label, Input } from "./styles";

interface TextFieldProps {
  label?: string;
  name: string;
}

export function TextField({ label, name }: TextFieldProps) {
  return (
    <TextFieldContainer onClick={() => document.getElementById(name)?.focus()}>
      <Label>
        {label}
      </Label>

      <Input
        id={name}
        placeholder=" "
      />
    </TextFieldContainer>
  )
}