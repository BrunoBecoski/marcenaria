import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { LayoutContainer, NavBar, NavButton } from './styles';

interface LayoutContainer {
  children: ReactNode;
}

export function Layout({ children }: LayoutContainer) {

  const { pathname, push } = useRouter()

  return (
    <LayoutContainer>
      <NavBar>
        <NavButton onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </NavButton>

        <NavButton onClick={() => push('/create')}  isActive={pathname === '/register'}>
            Cadastrar
        </NavButton>
      </NavBar>
      
      {children}
    </LayoutContainer>
  )
}