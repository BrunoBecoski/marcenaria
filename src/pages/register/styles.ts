import styled from 'styled-components';

export const RegisterContainer = styled.div`
  width: 100%;
  margin-inline: auto;
  margin-top: var(--space_40);

  h1 {
    font-size: var(--headline_lg);
    font-weight: var(--weight_md);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--space_16);
  margin-top: var(--space_24);
`;