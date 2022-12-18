import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space_20);

  .icon {
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
    font-size: 24px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: var(--space_16);
  padding: var(--space_16);
  
  list-style: none;
  background: ${({ theme }) => theme.colors.surface};
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