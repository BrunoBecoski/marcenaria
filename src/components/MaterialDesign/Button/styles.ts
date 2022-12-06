import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: var(--space_10) var(--space_24);
    
  outline: none;
  border: none;
  border-radius: var(--radio_full);
  font-weight: var(--weight_md);
  font-size: var(--label_lg);
  color: ${({ theme }) => theme.colors.onPrimary};
  background: ${({ theme }) => theme.colors.primary};

  :hover {
    opacity: 0.92;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  }

  :focus, :active {
    opacity: 0.88;
   }
`;