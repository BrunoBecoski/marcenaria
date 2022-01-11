import Link from 'next/link';

import { Container } from '../styles/Home-styles';

export default function Home() {

  return (
    <Container>

      <h1>Home</h1>
      <Link href="./create">Cálculo</Link>
    </Container>
  )
}
