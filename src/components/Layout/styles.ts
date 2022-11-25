import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 768px;
  margin-inline: auto;
  padding-inline: var(--space_16);
`;

export const NavBar = styled.nav`
  width: fit-content;
  display: flex;
  gap: var(--space_24);
  margin-inline: auto;
  width: 100%;
   
  background: ${({ theme }) => theme.colors.surfaceAt_2};
  border-radius: var(--radio_full);
`;

interface NavButtonProps {
  isActive: boolean;
}

export const NavButton = styled.button<NavButtonProps>`
  padding: var(--space_24);
  border-radius: var(--radio_full);
  width: 100%;
  
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