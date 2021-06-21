import { Button } from './styles';

type ButtonProps = {
  handleAddComponentInput: (type: 'mdf') => void;
}

export default function Buttons({ handleAddComponentInput }: ButtonProps) {
  return (
    <Button type="button" onClick={() => handleAddComponentInput('mdf')}>MDF</Button>
  );
}