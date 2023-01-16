import styled, { css } from 'styled-components';

interface TextFieldContainerProps {
  hasValue: boolean;
}

export const TextFieldContainer = styled.div<TextFieldContainerProps>`
  width: 100%;

  // ${({ hasValue }) => hasValue && css`
  //   label {
  //     top: calc(var(--size_8) * -1);
      
  //     font-size: var(--body_sm);
  //   }
  // `}
`;

export const Border = styled.div`
  cursor: text;
  position: relative;
  padding: var(--size_16);

  border-radius: var(--radio_md);
  border: 1px solid ${({ theme }) => theme.colors.outline};
  
  :has(input:focus) {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary};

    label {
      top: calc(var(--size_8) * -1);
      
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
      top: calc(var(--size_8) * -1);
    
      font-size: var(--body_sm);
    }
  }
`;

export const Label = styled.label`
  cursor: text;

  position: absolute;
  top: var(--size_16);
  padding-inline: var(--size_4);
  
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
  height: var(--size_16);

  margin-left: calc(var(--size_16) + var(--size_4));
  margin-top: var(--size_4);
`;