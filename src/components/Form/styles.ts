import styled from 'styled-components';

export const Container = styled.form`
  background-color: rgba(0, 0, 0, .8);
  width:  100%;
  height: 100%;
  padding: 1rem;

  h2 {
    color: white;
  }

  > button {
    margin-top: 16px;
    color: white;
    background: black;
    font-weight: bold;
    padding: 8px;

    border: 2px solid white;

    &:hover {
      color: green;
      border-color: green;
    }
  }
`;