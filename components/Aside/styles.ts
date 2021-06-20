import styled from 'styled-components';

export const Container = styled.aside`
  border: 5px double var(--font-color);
  border-radius: 8px;
  background-color: white;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 1rem;
  }

  div {
    display: flex;
    justify-content: center;
  }
`;