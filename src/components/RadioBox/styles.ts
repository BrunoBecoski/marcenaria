import styled from 'styled-components';

export const RadioBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space_20);
`;

export const Button = styled.label`
  cursor: pointer;

  width: fit-content;

  display: flex;
  align-items: center;
  
  input {
    opacity: 0;
    width: var(--space_16) ;
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
        transform: scale(10);
        opacity: 1;

        transition: all .2s;
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
    width: 1px;
    height: 1px;
    border-radius: var(--radio_full);
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0;
  }
`;

export const Label = styled.p`
  font-size: var(--body_lg);
  color: ${({ theme }) => theme.colors.onSurface};
`;