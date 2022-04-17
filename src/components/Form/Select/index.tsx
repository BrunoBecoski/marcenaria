import { Container, Option } from './styles';

export interface SelectOptionsProps {
  value: string, 
  label: string
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
  options: SelectOptionsProps[];
}

export function Select({ options, ...rest }: SelectProps) {
  return (
    <Container {...rest }>
      <Option
        disabled
        selected
      >
        Selecione o Cliente
      </Option>
      {
        options.map(option => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))
      }
    </Container>
  );
}