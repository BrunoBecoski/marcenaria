import styled from 'styled-components';

interface IconContainerProps {
  fill: boolean;
  weight: string;
}

export const IconContainer = styled.span<IconContainerProps>`
  &.material-symbols-outlined {
    ${({ fill, weight }) =>
      `font-variation-settings:
        'FILL' ${fill === true ? '1' : '0'},
        'wght' ${weight},
        'GRAD' 0,
        'opsz' 48
      `
    } 
  }
`;