import styled from 'styled-components';

export const TextFieldContainer = styled.div`
  width: 100%;
`;

export const Border = styled.div`
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
  
  :has(input[data-invalid="true"]) {    
    border-color: ${({ theme }) => theme.colors.error};
    
    label {
      color: ${({ theme }) => theme.colors.error};
    }

    :has(input:focus) {
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.error};
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

  transition: top .2s, font-size .2s;  
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background: none;

  width: 100%;
  font-size: var(--body_lg);
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const Span = styled.span`
  display: block;
  font-size: var(--body_sm);
  color: ${({ theme }) => theme.colors.error};
  height: var(--space_16);

  margin-left: calc(var(--space_16) + var(--space_4));
  margin-top: var(--space_4);
`;