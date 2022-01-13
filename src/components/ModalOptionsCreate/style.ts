import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;

  width: 80vw;

  background: var(--background);

  margin-top: 10vh;


`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  padding: 1rem;
  
  .radio {
  }

  .range {
    transform: rotate(-90deg);
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;