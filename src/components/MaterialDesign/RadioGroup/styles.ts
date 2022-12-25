import styled from 'styled-components';

export const RadioBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const Title = styled.p`
  margin-bottom: var(--size_8);
  
  font-size: var(--title_md);
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
`;