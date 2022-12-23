import styled from 'styled-components';

interface IconContainerProps {
  fill: '0' | '1';
  weight: string;
}

export const IconContainer = styled.span<IconContainerProps>`
  &.material-symbols-outlined {
    ${({ fill, weight }) =>
      `font-variation-settings:
        'FILL' ${fill},
        'wght' ${weight},
        'GRAD' 0,
        'opsz' 48
      `
    } 
  }
`;