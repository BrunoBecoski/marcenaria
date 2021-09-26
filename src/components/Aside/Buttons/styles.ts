import styled from 'styled-components';

type ButtonProps = {
  isMdfOpen: boolean;
}

export const Button = styled.button<ButtonProps>`
  background: ${(props) => (props.isMdfOpen ?  'white' : 'black')};
  color: ${(props) => (props.isMdfOpen ?  'black' : 'white')};

  border: none;
  font-weight: bold;
  width: 3rem;
  height: 2rem;

  &:hover {
    background: white;
    color: black;
  }
`;