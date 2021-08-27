import { ReactNode, createContext, useContext } from 'react';

type InputBoxProviderProps = {
  children: ReactNode;
}



const InputBoxContext = createContext({});

export function InputBoxProvider({ children }: InputBoxProviderProps) {


  return (
    <InputBoxContext.Provider value={'test'}>
      {children}
    </InputBoxContext.Provider>
  );
}

export const useInputBox = () => useContext(InputBoxContext);