import styled from 'styled-components';

export const ProductContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--size_16);
  margin-top: var(--size_24);
`;

export const RadioContainer = styled.div`

  display: flex;
  flex-direction: column;
  gap: var(--size_8);

  button {
    border: none;
    background: none;

    display: flex;
    align-items: center;
    gap: var(--size_16);

  }
`;