import { Container, Option } from './styles';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
  options: {value: string, label: string}[];
}

export function Select({ options, ...rest }: SelectProps) {
  return (
    <Container {...rest }>
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