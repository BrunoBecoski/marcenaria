import { Icon, IconNamesTypes } from '../../MaterialDesign';

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