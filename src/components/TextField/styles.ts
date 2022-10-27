import styled from 'styled-components';

export const TextFieldContainer = styled.div`
  cursor: text;
  position: relative;
  padding: var(--space_16);

  border-radius: var(--radio_md);
  border: 1px solid ${({ theme }) => theme.colors.outline};

  :has(input:focus) {
    
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary};

    label {
      top: calc(var(--space_8) * -1);
      
      font-size: var(--body_sm);
      font-weight: var(--weight_md);
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  :not(:has(input:placeholder-shown)) {
    label {
      top: calc(var(--space_8) * -1);
    
      font-size: var(--body_sm);
    }
  }
`;

export const Label = styled.label`
  cursor: text;

  position: absolute;
  top: var(--space_16);
  padding-inline: var(--space_4);
  
  font-size: var(--body_lg);
  color: ${({ theme }) => theme.colors.onSurface};
  background: ${({ theme }) => theme.colors.background};

  transition: all .2s;  
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background: none;
  font-size: var(--body_lg);
  color: ${({ theme }) => theme.colors.onSurface};
`;
