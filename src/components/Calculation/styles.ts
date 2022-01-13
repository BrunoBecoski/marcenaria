import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .background {
    width: 100%;
    height: 100%;
    background: var(--on-surface_medium);
    position: fixed;
  }
`;

export const Header = styled.header`
  background: var(--primary_500);
  padding: 1rem;

  h2 {
    color: var(--on-primary);
  }
`;

export const Main  =  styled.main`
  background: var(--background);

  display: flex;
  align-items: space-around;
`;

export const NavBar = styled.nav`
  background: var(--background);

  .selected {
    background:  var(--primary_200);
  }
`;

export const Content = styled.div`
  background: var(--background);
`;

export const AddOptions = styled.span`  
  right: 25px;
  bottom: 25px;
  position: fixed;

  display: flex;
  flex-direction: column;
  
  svg {
    margin-top: 1rem;
    color: var(--primary_400);

    &:focus, &:active {
      color: var(--primary_500);
    }
  }
`;

export const OptionsAddModal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;

  z-index: 2;

  button {
    border: none;
    background: transparent;
    color: var(--secondary_200);
    font-weight: bold;
    font-size: 1.5rem;
  }

  button + button {
    margin-top: .5rem;
  }
`;
