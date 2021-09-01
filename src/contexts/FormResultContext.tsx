import { createContext, ReactNode, useContext, useState } from 'react';

type FormResultProviderProps = {
  children: ReactNode;
}

type inputsMDFValuesProps = {
  width: number;  
  height: number;
  thickness: '3mm' | '6mm' | '9mm' | '12mm' | '15mm';
}

type FormContextData = {
  inputsMDFValues: inputsMDFValuesProps[];
  setInputsMDFValues: (data: inputsMDFValuesProps[]) => void;
}

const FormResultContext = createContext({} as FormContextData);

export function FormResultProvider({ children }: FormResultProviderProps) {
  const [inputsMDFValues, setInputsMDFValues] = useState<inputsMDFValuesProps[]>([]);

  return (
    <FormResultContext.Provider value={{
      inputsMDFValues, 
      setInputsMDFValues
    }}>
      {children}
    </FormResultContext.Provider>
  );
}

export const useFormResult = () => useContext(FormResultContext);