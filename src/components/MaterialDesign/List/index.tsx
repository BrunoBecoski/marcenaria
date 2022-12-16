import { Icon } from '../../MaterialDesign';

import { Item, ListContainer } from './styles';

interface ListProps {
  contentList: {
    id: string;
    title: string;
    description?: string;
  }[]
  type?: 'user';
}

export function List({ contentList, type }: ListProps) {
  
  if (!contentList) {
    return (<></>)
  }

  if(type === 'user') {
    return (
      <ListContainer>
        {
          contentList.map(content => (
            <Item key={content.id}>
              <Icon
                name="person"
              />
              <span>{content.title}</span>
            </Item>
          ))
        }
    </ListContainer>
    )
  }


  return (
    <ListContainer>
      {
        contentList.map(content => (
          <Item key={content.id}>
            <span>{content.title}</span>
            <p>{content.description}</p>
          </Item>
        ))
      }
    </ListContainer>
  )
}