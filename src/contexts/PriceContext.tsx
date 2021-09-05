import { ReactNode, createContext, useContext, useState } from 'react';

type  PriceContextProps = {
  children: ReactNode;
}

type MdfPriceProps = {
  id: number;
  cm1: number;
  cm2: number;
  value: number;
}

type PriceContextData  = {
  mdfPrice: MdfPriceProps[];
  updatePrice: (data: MdfPriceProps) => void;
}

const PriceContext = createContext({} as PriceContextData);

export function PriceProvider({ children }: PriceContextProps) {
  const [mdfPrice, setMdfPrice] = useState([
    {
      id: 3,
      cm1: 2.75,
      cm2: 1.84,
      value: 200,
    },{
      id: 6,
      cm1: 2.75,
      cm2: 1.84,
      value: 250,
    },
    {
      id: 9,
      cm1: 2.75,
      cm2: 1.84,
      value: 300,
    },
    {
      id: 12,
      cm1: 2.75,
      cm2: 1.84,
      value: 350,
    },
    {
      id: 15,
      cm1: 2.75,
      cm2: 1.84,
      value: 400,
    }
  ]);

  function updatePrice(data: MdfPriceProps) {
    console.log('=======');
    console.log(data.id);
    console.log(data.value);
    console.log(data.cm1);
    console.log(data.cm2);
    console.log('=======');
  }

  return (
    <PriceContext.Provider
      value={{
        mdfPrice,
        updatePrice
      }}
    >
      {children}
    </PriceContext.Provider>
  )
}

export const usePrice = () => useContext(PriceContext);