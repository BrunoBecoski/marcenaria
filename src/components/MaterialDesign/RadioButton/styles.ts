import styled from 'styled-components';

export const RadioButtonContainer = styled.div`
  width: var(--space_26);
  height: var(--space_26);
  
  .icon {
    font-size: var(--space_24);
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
