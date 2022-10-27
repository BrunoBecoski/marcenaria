import styled from 'styled-components'

export const LayoutContainer = styled.div``;

export const NavBar = styled.nav`
  width: fit-content;
  display: flex;
  gap: var(--space_24);
  margin-inline: auto;
   
  background: ${({ theme }) => theme.colors.surface2};
  border-radius: var(--radio_full);
`;

interface NavButtonProps {
  isActive: boolean;
}

export const NavButton = styled.button<NavButtonProps>`
  padding: var(--space_24);
  border-radius: var(--radio_full);
  
  border: none;
  font-size: var(--size_rg);
  font-weight: var(--weight_md);
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  background: ${({ isActive, theme }) => 
    isActive 
    ? theme.colors.secondaryContainer 
    : 'inherit'
  };  
    
  :hover {
    color: ${({ theme }) => theme.colors.onSurface};
    background: ${({ theme }) => theme.colors.primaryContainer};
  }
`;