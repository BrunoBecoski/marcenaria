import styled from 'styled-components';

export const RadioBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space_20);
`;

export const Title = styled.p``;

export const Button = styled.label`
  cursor: pointer;


  width: fit-content;

  display: flex;
  align-items: center;
  outline: deeppink;

  -webkit-tap-highlight-color: transparent;

  
  input {
    opacity: 0;
    cursor: pointer;
    width: var(--space_16);
  }

  
  span {
    background: transparent;
  }

  &:has(input:focus) {
    &:has(input:checked) {
      div::before {
        background: ${({ theme }) => theme.colors.onSurfaceOpacity_12};
      }
    }

    div::before {
      background: ${({ theme }) => theme.colors.onSurfaceOpacity_12};
    }
  }

  &:hover div {
    ::before {    
      background-color: ${({ theme }) => theme.colors.onSurfaceOpacity_8};
    }
  }

  &:has(input:checked) {

    &:hover div {
      &::before {    
        background-color: ${({ theme }) => theme.colors.primaryOpacity_8};
      }
  }
    div {
      border-color: ${({ theme }) => theme.colors.primary};

      span {
        transform: scale(1);
        transition: all .1s linear;
      }
    }
  }
`;

export const Icon = styled.div`
  width: var(--space_20);
  height: var(--space_20);

  border: 2px solid ${({ theme }) => theme.colors.onSurfaceVariant};

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  border-radius: var(--radio_full);

  ::before {
    content: '';
    position: absolute;
    z-index: -10;

    width: var(--space_40);
    height: var(--space_40);
    border-radius: var(--radio_full);
  }


  span {
    position: absolute;

    top: 50%;
    left: 50%;

    margin-top: calc(var(--space_5) * -1);
    margin-left: calc(var(--space_5) * -1);

    transform: scale(0);


    width: var(--space_10);
    height: var(--space_10);
    border-radius: var(--radio_full);
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const Label = styled.p`
  font-size: var(--body_lg);
  color: ${({ theme }) => theme.colors.onSurface};
`;