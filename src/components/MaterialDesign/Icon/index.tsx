import 'material-symbols';
import { MaterialSymbol } from 'material-symbols/index';

import { IconContainer } from './styles';

export type IconNamesTypes = MaterialSymbol;

interface IconProps {
  name: IconNamesTypes;
  fill?: boolean;
  weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700';
}

export function Icon({ name, fill = false, weight = '400' }: IconProps) {
  return (
    <IconContainer 
      fill={fill ? '1' : '0'}
      weight={weight}
      className="material-symbols-outlined icon"
    >
      {name}
    </IconContainer>
  )
}