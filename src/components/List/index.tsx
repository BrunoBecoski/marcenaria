import { Item, ListContainer } from './styles';

interface ListProps {
  contentList: {
    id: string;
    title: string;
    description?: string;
  }[]
}

export function List({ contentList }: ListProps) {

  if (!contentList) {
    return (<></>)
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