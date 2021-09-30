import React, { ReactNode, createContext, useContext, useState, useEffect } from 'react';

type MdfProviderProps = {
  children: ReactNode;
}

type CreateMdfBoxProps = {
  thick: string;
  range: number;
}

type MdfContextData = {
  isMdfOpen: boolean;
  handleMdfOpen: () => void;
  handleAddNewMdfBox: (data: CreateMdfBoxProps) => void;
  list: [string];
}

const MdfContext = createContext({} as MdfContextData);

export function MdfProvider({ children }: MdfProviderProps) {
  const [isMdfOpen, setIsMdfOpen] = useState(false);
  const [createMdfBox, setCreateMdfBox] = useState<CreateMdfBoxProps>({
    thick: '0mm',
    range: 0
  });

  function handleMdfOpen() {
    setIsMdfOpen(!isMdfOpen)
  }

  let list = ['test'];

  for (let index = 0; index < createMdfBox?.range; index++) {
    list.push(`${createMdfBox.thick}_${index}`)
  }

  function handleAddNewMdfBox({ thick, range }: CreateMdfBoxProps) {
    console.log('add')
    setCreateMdfBox({thick, range});
  }

  return (
    <MdfContext.Provider value={{ isMdfOpen, handleMdfOpen, handleAddNewMdfBox, list }}>
      {children}
    </MdfContext.Provider>
  );
}

export const useMdf = () => useContext(MdfContext);