import styled, { css } from 'styled-components';

interface RadioButtonContainerProps {
  selected: boolean;
}

export const RadioButtonContainer = styled.button<RadioButtonContainerProps>`
  display: flex;
  align-items: center;
  gap: var(--size_16);
  padding: var(--size_8);
  width: fit-content;

  border: none;
  background: none;

  .icon {
    font-size: var(--size_20);
  }

  ${({ selected, theme }) => selected 
    ? 
      css`
        font-weight: var(--weight_md);
        color: ${theme.colors.primary}
      `
    : css`
        font-weight: var(--weight_rg);
        color: ${theme.colors.onSurfaceVariant}
      `
  }
`;

export const Label = styled.p`
  font-size: var(--label_lg);
`;