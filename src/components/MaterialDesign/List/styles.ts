import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space_20);
`; 

export const Item = styled.li`
  padding: var(--space_16) var(--space_24);
  
  list-style: none;
  background: ${({ theme }) => theme.colors.surface};

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