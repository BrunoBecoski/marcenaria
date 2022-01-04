import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, .5);

  width: 100%;
  height: 100%;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Content = styled.div`
  background-color: black;

  width: 50%;
  height: 50%;

  button {
    border: 2px solid white;
    padding: 8px 16px;
    background: black;
    color: white;
    font-weight: bold;
  }
`;