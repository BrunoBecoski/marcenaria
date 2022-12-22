import styled from 'styled-components';

export const RadioButtonContainer = styled.div`
  display: flex;
  
  .icon {
    font-size: var(--size_24);
  }

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
