import styled from 'styled-components';

export const CreateContainer = styled.div`
  width: 100%;
  margin-inline: auto;
  margin-top: var(--size_40);
  
  h1 {
    font-size: var(--headline_lg);
    font-weight: var(--weight_md);
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: var(--size_16);
  }
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.onSurface};
  font-size: var(--title_lg);
`;