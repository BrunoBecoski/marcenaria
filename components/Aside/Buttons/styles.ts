import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--mdf-color);

  border: none;
  color: white;
  font-weight: bold;
  width: 3rem;
  height: 2rem;
  box-shadow: 2px 2px black;

  &:hover {
    box-shadow: none;
    transform: translateY(2px) translateX(2px);
  }

`;
