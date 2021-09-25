import { ReactNode, createContext, useContext, useState } from 'react';

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
  setCreateMdfBox: (data: CreateMdfBoxProps) => void;
  createMdfBox: CreateMdfBoxProps; 
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

  return (
    <MdfContext.Provider value={{ isMdfOpen, handleMdfOpen, setCreateMdfBox, createMdfBox }}>
      {children}
    </MdfContext.Provider>
  );
}

export const useMdf = () => useContext(MdfContext);