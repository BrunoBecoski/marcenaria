import { Container } from './styles';

export default function MdfCreate() {

  function handleCreate() {
    console.log('submit');
  }

  return (
    <Container>
      <form onSubmit={handleCreate}>
        <button type="submit">Criar</button>
      </form>
    </Container >
  );
}