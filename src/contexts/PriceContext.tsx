import { createContext, ReactNode, useContext, useEffect, useState } from "react";

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

  const [] = useState([
    {
      id: 3,
      price: 120
    },
    {
      id: 6,
      price: 120
    },
    {
      id: 9,
      price: 120
    },
    {
      id: 12,
      price: 120
    },
    {
      id: 15,
      price: 120
    }
  ]) ;

  useEffect(() => {

  }, [mdfPrice])

  function updatePrice(data: MdfPriceProps) {
    setMdfPrice([data, ...mdfPrice.filter((mdf) => mdf.id !== data.id)]);
  }

  //  3.7125 = (2.75 * 1.35)
  //  3.7125 = 200
  //  1 = 0.0185625 

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