import styled from 'styled-components'

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.size.display.md};
  font-family: ${({ theme }) => theme.font.family.default};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`

export default function Home() {
  return <Title>My page</Title>
}