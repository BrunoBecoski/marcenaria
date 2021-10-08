import styled from 'styled-components';

export const Container = styled.form`
  border: 5px double var(--font-color);
  border-radius: 8px;
  background-color: white;
  padding: 1rem;

  > div {
    display: flex;
    div  {
      border: 1px solid black;
    }
  }
  
`;