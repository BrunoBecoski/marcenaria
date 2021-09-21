import { ReactNode, createContext, useContext, useState } from 'react';

type MdfProviderProps = {
  children: ReactNode;
}

type MdfContextData = {
  isMdfOpen: boolean;
  handleMdfOpen: () => void;
}

const MdfContext = createContext({} as MdfContextData);

export function MdfProvider({ children }: MdfProviderProps) {
  const [isMdfOpen, setIsMdfOpen] = useState(false);

  function handleMdfOpen() {
    setIsMdfOpen(!isMdfOpen)
  }

  return (
    <MdfContext.Provider value={{ isMdfOpen, handleMdfOpen }}>
      {children}
    </MdfContext.Provider>
  );
}

export const useMdf = () => useContext(MdfContext);