import { createContext, ReactNode, useContext, useState } from 'react';

type FormResultProviderProps = {
  children: ReactNode;
}

type inputsMDFResultProps = {
  total3: number;
  total6: number;
  total9: number;
  total12: number;
  total15: number;
}

const FormResultContext = createContext({});

export function FormResultProvider({ children }: FormResultProviderProps) {
  const [inputsMDFResult, setInputsMDFResult] = useState<inputsMDFResultProps[]>([]);

  return (
    <FormResultContext.Provider value={{inputsMDFResult, setInputsMDFResult}}>
      {children}
    </FormResultContext.Provider>
  );
}

export const useFormResult = () => useContext(FormResultContext);