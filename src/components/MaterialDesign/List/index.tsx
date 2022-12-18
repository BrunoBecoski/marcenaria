import { Icon, IconNamesTypes } from '../../MaterialDesign';

import { ListContainer, Item, Content } from './styles';

export type ListContentTypes = {
  id: string;
  text: string;
  supporttingText?: string;
}

interface ListProps {
  content: ListContentTypes[];
  icon?: IconNamesTypes;
}

export function List({ content, icon }: ListProps) {
  return (
    <ListContainer>
      {
        content.map(item => (
          <Item key={item.id}>
            {
              !icon || icon === undefined && <Icon name={icon} />
            }
            <Content>
              <span>{item.text}</span>
              <p>{item.supporttingText && item.supporttingText}</p>
            </Content>
          </Item>
        ))
      }
    </ListContainer>
  )
}