import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--size_20);
`;

export const Item = styled.li`
  cursor: pointer;

  width: var(--size_360);
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--size_16);
  padding: var(--size_16);
  
  list-style: none;
  background: ${({ theme }) => theme.colors.surfaceAt_1};

  > .icon {
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
  }
`;

export const Content = styled.div`
  flex: 1;

  span {
    font-size: var(--body_lg);
    color: ${({ theme }) => theme.colors.onSurface};
  }

  p {
    margin-top: var(--size_4);

    font-size: var(--body_md);
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
  }
`;