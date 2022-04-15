import { Container, InputRadio, Label } from './styles';

interface InputRadioBox {
  name: string;
  options: string[];
  setState: (value: string) => void;
}

export function InputRadioBox({ name, options, setState }: InputRadioBox) {
  return (
    <Container>
      {
        options.map(option => (
          <div key={option} onClick={() => setState(option)}>
            <InputRadio
              name={name}
              id={option}
            />
            <Label htmlFor={option}>{option}</Label>
          </div>
        ))
      }      
    </Container>
  );
}