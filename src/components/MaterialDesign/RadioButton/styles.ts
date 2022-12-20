import styled from 'styled-components';

export const RadioButtonContainer = styled.div`
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
