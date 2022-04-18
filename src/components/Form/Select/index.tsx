import { Container, Option } from './styles';

export interface SelectOptionsProps {
  value: string, 
  label: string
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
  options: SelectOptionsProps[];
  placeholder: string;
}

export function Select({ options, placeholder, ...rest }: SelectProps) {
  return (
    <Container {...rest }>
      <Option
        disabled
        selected
      >
        {placeholder}
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