import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space_20);

`;

export const Item = styled.li`
  cursor: pointer;
  
  display: flex;
  align-items: center;
  gap: var(--space_16);
  padding: var(--space_16);
  
  list-style: none;
  background: ${({ theme }) => theme.colors.surface};

  > .icon {
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
  }
`;

export const Content = styled.div`
  span {
    font-size: var(--body_lg);
    color: ${({ theme }) => theme.colors.onSurface};
  }

  p {
    margin-top: var(--space_4);

    font-size: var(--body_md);
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
  }
`;