import styled from 'styled-components';

export const Container = styled.div`
  & > main {
    display: flex;
    
    aside {
      margin-right: 1rem;
      width: 10rem;
      height: calc(100vh - 2rem);
    }
    
    section {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }
`;
