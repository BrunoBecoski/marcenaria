import styled  from 'styled-components';

export const Container = styled.div`

  width: 10.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: .25rem;
  margin-bottom: 1rem;

  background-color: black;
  border: 2px solid white;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;

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
    color: black;

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
    color: white;

    input {
      width: 3rem;
      padding: .1rem;
    }
    &:first-child {
      margin-bottom: .25rem;
    }
  }
`;

