import { Item, ListContainer } from './styles';

interface ListProps {
  contentList: {
    title: string;
    description: string;
  }[]
}

export function List({ contentList }: ListProps) {
  return (
    <ListContainer>
      {
        contentList.map(content => (
          <Item>
            <span>{content.title}</span>
            <p>{content.description}</p>
          </Item>
        ))
      }
    </ListContainer>
  )
}