import styled  from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: whitesmoke;
  border: 5px double var(--primary-color);
  max-width: 12rem;
  height: 8rem;

  margin-bottom: 1rem;
  padding: .25rem;

  header {

  }

  main {
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      input, select {
        width: 5rem;
      }
    }
  }

  button {}

`;