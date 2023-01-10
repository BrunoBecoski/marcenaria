import styled from 'styled-components';

export const ClientContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--size_16);
  margin-top: var(--size_24);

  button[type="submit"] {
    display: none;
  }
`;

export const SelectClientContainer = styled.div`
  margin-inline: auto;
`;