import { Container } from "./styles";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ children, ...rest }: LabelProps) {
  return (
    <Container
      {...rest}
    >
      {children}
    </Container>
  );
}