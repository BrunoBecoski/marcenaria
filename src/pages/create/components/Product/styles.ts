import styled from 'styled-components';

export const ProductContainer = styled.form`
  display: grid;
  gap: var(--size_16);
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);

  .name { grid-area: name; }
  .description { grid-area: description; }
  .price { grid-area: price; }
  .date { grid-area: date; }
  .type { grid-area: type; }

  grid-template-areas:
    "name name description description description description"
    "name name description description description description"
    "name name description description description description"
    "price price price date date date"
    "price price price date date date"
    "price price price date date date"
    "type type type type type type"
  ;

  button[type="submit"] {
    display: none;
  }
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