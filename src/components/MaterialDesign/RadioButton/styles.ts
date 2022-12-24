import styled, { css } from 'styled-components';

interface RadioButtonContainerProps {
  selected: boolean;
}

export const RadioButtonContainer = styled.button<RadioButtonContainerProps>`
  display: flex;
  align-items: center;
  gap: var(--size_16);

  .icon {
    font-size: var(--size_24);
  }

  ${({ selected }) => selected 
    ? 
      css`
        background: royalblue;
      `
    : css`
        background: firebrick;
      `
  };


  &.selected {
    .icon {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  &.unselected {
    .icon {
      color: ${({ theme }) => theme.colors.onSurfaceVariant};
    }
  }
`;


export const Label = styled.span``;