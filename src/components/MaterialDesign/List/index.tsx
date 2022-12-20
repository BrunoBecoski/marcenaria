import { useState } from 'react';
import { Icon, IconNamesTypes,RadioButton } from '../../MaterialDesign';

import { ListContainer, Item, Content } from './styles';

export type ListContentTypes = {
  id: string;
  text: string;
  supporttingText?: string;
}

interface ListProps {
  content: ListContentTypes[];
  icon?: IconNamesTypes | false;
}

export function List({ content, icon = false }: ListProps) {
  return (
    <ListContainer>
      { 
        content.map(item => (
          <Item key={item.id}>
            { icon && <Icon name={icon} /> }
            <Content>
              <span>{item.text}</span>
              { item.supporttingText && <p>{item.supporttingText}</p> }
            </Content>
          </Item>
        ))
      }
    </ListContainer>
  )
}

export function ListWithRadioButton({ content, icon = false }: ListProps) {
  const [checked, setChecked] = useState(false)

  function handleClick() {
    setChecked(prevState => !prevState)
  }

  return (
    <ListContainer>
      {
        content.map(item => (
          <Item key={item.id} as="button" onClick={handleClick}>
            { icon && <Icon name={icon} /> }
            <Content>
              <span>{item.text}</span>
              { item.supporttingText && <p>{item.supporttingText}</p> }
            </Content>
            <RadioButton checked={checked} />
          </Item>
        ))
      }
    </ListContainer>
  )
}