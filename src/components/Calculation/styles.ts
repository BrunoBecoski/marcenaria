import styled from 'styled-components';

export const Background = styled.div`
  background-color: rgba(0, 0, 0, .9);

  width: 100%;
  height: 100%;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 50vw;
  height: 50vh;
`;

export const Header = styled.header`
  background: var(--primary_500);

  display: flex;
  justify-content: space-between;

  h2 {
    color: var(--on-primary)
  }

  button {
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background:  var(--error);
    font-weight: bold;

    color:  var(--on-error);   
  }
`;

export const Main  =  styled.main`
  background: var(--background);

  display:   flex;
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