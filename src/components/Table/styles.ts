import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    background: grey;
  }

  tr:nth-child(even) {
    background: lightgrey;
  }
`;