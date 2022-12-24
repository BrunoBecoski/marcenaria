import { useEffect, useState } from 'react';
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

interface ContentListProps {
  id: string;
  text: string;
  supporttingText?: string;
  selected: boolean;
}

interface ListWithRadioButtonProps {
  content: ListContentTypes[];
  icon?: IconNamesTypes | false;
  setSelected: (value: ContentListProps | undefined) => void;
}

export function ListWithRadioButton({ content, icon = false, setSelected }: ListWithRadioButtonProps) {
  
  const [contentList, setContentList] = useState<ContentListProps[]>([]);

  function handleSelect(itemSelected: ContentListProps) {

    let newList: ContentListProps[]

    const selectedId = itemSelected.id;
    const hasSelected = contentList.find(item => item.id === selectedId && item.selected === true);

    if(hasSelected) {
  
      setSelected(undefined);

      newList = contentList.map(item => {
        return { ...item, selected: false }
      })
    } else {

      setSelected(itemSelected);

      newList = contentList.map(item => {
        if(item.id === selectedId) {
          return {
            ...item,
            selected: true,
          }
        } else {
          return {
            ...item,
            selected: false,
          }
        }
      })
    }

    setContentList(newList);
  }

  useEffect(() => {
    setContentList(content.map(item => {
      return {
        ...item,
        selected: false,
      }
    }))
  }, [content])

  return (
    <ListContainer>
      {
        contentList.map(item => (
          <Item key={item.id} onClick={() => handleSelect(item)}>
              { icon && <Icon name={icon} /> }
              <Content>
                <span>{item.text}</span>
                { item.supporttingText && <p>{item.supporttingText}</p> }
              </Content>
            <RadioButton selected={item.selected} />
          </Item>
        ))
      }
    </ListContainer>
  )
}