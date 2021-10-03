import React, { ReactNode, createContext, useContext, useState, useEffect } from 'react';

type MdfProviderProps = {
  children: ReactNode;
}

type CreateMdfBoxProps = [{
  id: string;
  thick: string;
}]

type AddNewMdfBoxProps = {
  thick: string;
  range: number;
}

type MdfContextData = {
  isMdfOpen: boolean;
  handleMdfOpen: () => void;
  handleAddNewMdfBox: (data: AddNewMdfBoxProps) => void;
  createMdfBox: [];
}

const MdfContext = createContext({} as MdfContextData);

export function MdfProvider({ children }: MdfProviderProps) {
  const [isMdfOpen, setIsMdfOpen] = useState(false);
  const [createMdfBox, setCreateMdfBox] = useState<CreateMdfBoxProps>();

  function handleMdfOpen() {
    setIsMdfOpen(!isMdfOpen)
  }

  let idMdfBox = 0;

  
  function handleAddNewMdfBox({ thick, range }: AddNewMdfBoxProps) {
    let list = [];
    for (let index = 0; index < range; index++) {
      list.push({
        id: `${thick}_${idMdfBox}`,
        thick,
      })
      idMdfBox++;
    }
    setCreateMdfBox(list);
  }

  return (
    <MdfContext.Provider value={{ isMdfOpen, handleMdfOpen, handleAddNewMdfBox, createMdfBox }}>
      {children}
    </MdfContext.Provider>
  );
}

export const useMdf = () => useContext(MdfContext);