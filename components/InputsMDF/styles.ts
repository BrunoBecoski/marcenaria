import styled  from 'styled-components';

export const Container = styled.li`
  list-style: none;

  background-color: whitesmoke;
  border: 5px double black;
  max-width: 10rem;

  margin-bottom: 1rem;
  padding: .25rem;

  div input {
    margin-bottom: .25rem;
  }

  div {
    display: flex;
    justify-content: space-between;
  
    input, select {
      width: 5rem;
    }
  }
`;