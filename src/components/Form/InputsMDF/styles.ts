import styled  from 'styled-components';

export const Container = styled.div`
  width: 12rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: .25rem;
  margin-bottom: 1rem;
  border: 3px solid var(--mdf-color);

  background-color: whitesmoke;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 2px;
  margin-bottom: 3px;
  border-bottom: 1px solid var(--font-color);

  h3 {
    font-size: 1.2rem;
  }

  button {
    width: 1.2rem;
    height: 1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    border-radius: 3px;
    background-color: white;
    border: 2px solid black;

    &:hover {
      color: var(--primary-color);
      border-color: var(--primary-color);
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;

    input {
      width: 4rem;
      padding: .1rem;
      margin-bottom: .25rem;
    }
  }
`;

