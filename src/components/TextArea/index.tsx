import { Container } from './styles';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea({ ...rest }: TextAreaProps) {
  return (
    <Container
      {...rest}
    />
  )
}