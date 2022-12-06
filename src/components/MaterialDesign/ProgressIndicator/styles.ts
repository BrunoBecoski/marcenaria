import styled from 'styled-components';

export const ProgressIndicatorContainer = styled.div`
  width: 100%;
  height: var(--space_4);
  display: flex;

  background: ${({ theme }) => theme.colors.surfaceVariant};
  
  div {
    width: 100%;
    
    &[data-isActive=true] {
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;