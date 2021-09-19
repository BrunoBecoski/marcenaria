import styled from 'styled-components';

export const Container = styled.aside`
  background-color: rgba(0, 0, 0, .8);
  
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: white;
    margin: 1rem;
  }

  div {
    display: flex;
    justify-content: center;
  }
`;