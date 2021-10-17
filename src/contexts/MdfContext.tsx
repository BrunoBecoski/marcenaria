import React, { ReactNode, createContext, useContext, useState, useEffect } from 'react';

type MdfProviderProps = {
  children: ReactNode;
}

type CreateMdfBoxProps = Array<{
  id: string;
  thick: string;
  group: string;
}>

type AddNewMdfBoxProps = {
  thick: string;
  range: number;
}

type MdfContextData = {
  isMdfOpen: boolean;
  handleMdfOpen: () => void;
  handleAddNewMdfBox: (data: AddNewMdfBoxProps) => void;
  createMdfBox: CreateMdfBoxProps;
  handleRemoveMdfBox: (id: string) => void;
  handleAddMdfBox: (thick: string) => void;
}

const MdfContext = createContext({} as MdfContextData);

export function MdfProvider({ children }: MdfProviderProps) {
  const [isMdfOpen, setIsMdfOpen] = useState(false);
  const [createMdfBox, setCreateMdfBox] = useState<CreateMdfBoxProps>([]);

  const [idMdfBox, setIdMdfBox] = useState(0)

  function handleMdfOpen() {
    setIsMdfOpen(!isMdfOpen)
  }

  // let idMdfBox = 0;

  function SumIdMdfBox(index: number) {
    setIdMdfBox(idMdfBox + index);
    return idMdfBox;
  }  

  function handleAddNewMdfBox({ thick, range }: AddNewMdfBoxProps) {
    let list = createMdfBox;
    for (let index = 0; index < range; index++) {
      list.push({
        id: `${thick}_${SumIdMdfBox(index + 1) + index}`,
        thick,
        group: thick,
      })
    }
    setCreateMdfBox(list);
  }

  function handleRemoveMdfBox(id: string) {
    const newList = createMdfBox.filter((mdf) => mdf.id !== id);
    setCreateMdfBox(newList)
  }

  function handleAddMdfBox(thick: string) {
    setCreateMdfBox([...createMdfBox, {
      id: `${thick}_${SumIdMdfBox(1)}`,
      thick: thick,
      group: thick,
    }]);
  }

  return (
    <MdfContext.Provider 
      value={{ 
        isMdfOpen, 
        handleMdfOpen, 
        handleAddNewMdfBox, 
        createMdfBox, 
        handleRemoveMdfBox,
        handleAddMdfBox
      }}
    >
      {children}
    </MdfContext.Provider>
  );
}

export const useMdf = () => useContext(MdfContext);