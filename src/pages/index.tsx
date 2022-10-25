import styled from 'styled-components'

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  return (
    <HomeContainer>
       <h1>My page</h1>
    </HomeContainer>
  )
}