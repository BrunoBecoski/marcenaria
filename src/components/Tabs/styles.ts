import styled from 'styled-components';

export const TabsContainer = styled.div`
  overflow: hidden;
  display: flex;
  width: 100%;

  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.surfaceVariant};
  `;

export const Tab = styled.button`
  flex: 1;
  padding-block: var(--space_14);

  border: none;
  background: none;
  font-size: var(--title_sm);
  font-weight: var(--weight_md);
  color: ${({ theme }) => theme.colors.onSurfaceVariant};

  :active {
    background: ${({ theme }) => theme.colors.surface1};  
  }
  
  &[data-active="true"] {
    color: ${({ theme }) => theme.colors.primary};
    
    span {
      &:after {
        bottom: 0;

        transition: all .2s;
      }
    }
  }
  
  span {
    position: relative;
    padding-block: var(--space_14);

    &:after {
      content: '';
      width: 100%;
      height: 3px;
      position: absolute;
      bottom: -3px;
      left: 0;
      
      border-top-left-radius: var(--radio_full);
      border-top-right-radius: var(--radio_full);
      background: ${({ theme }) => theme.colors.primary};  
    } 
  }
`;