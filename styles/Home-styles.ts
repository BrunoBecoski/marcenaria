import styled from 'styled-components';

export const Container = styled.div`
  border: 5px solid blue;

  main {
    display: flex;
    
    section {
      display: flex;
      border: 5px solid green;
      flex-direction: column;
    }
  }
`;
