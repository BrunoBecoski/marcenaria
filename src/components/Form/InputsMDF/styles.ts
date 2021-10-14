import styled  from 'styled-components';

export const Container = styled.div`

  width: 10.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: .25rem;
  margin-bottom: 1rem;

  background-color: rgba(255, 255, 255, 0.8);

`;

export const Header = styled.header`
  margin-left: 140px;
  margin-bottom: 3px;

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
    }
    &:first-child {
      margin-bottom: .25rem;
    }
  }
`;

