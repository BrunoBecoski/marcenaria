import { Container, Option } from './styles';

interface DataListProps extends React.DataHTMLAttributes<HTMLDataListElement> {
  options: string[];
}

export function DataList({ options, ...rest }: DataListProps) {
  return (
    <Container
      {...rest}
    > 
      {
        options.map(option => (
          <Option value={option} />
        ))
      }
    </Container>
  );
}