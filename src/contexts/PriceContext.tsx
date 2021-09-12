import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type  PriceContextProps = {
  children: ReactNode;
}

type MdfPriceProps = {
  id: number;
  price: number;
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
      price: 200,
    },{
      id: 6,
      price: 250,
    },{
      id: 9,
      price: 300,
    },{
      id: 12,
      price: 350,
    },{
      id: 15,
      price: 400,
    }
  ]);

  function updatePrice(data: MdfPriceProps) {
    setMdfPrice([data, ...mdfPrice.filter((mdf) => mdf.id !== data.id)]);
  }

  //  = = = = = = = = = = = = = = = = = =
  //
  //  5.06_m² = 2.75 * 1.84
  //  
  //   50600 = 5.06_m² * 10000
  //
  //      50600_cm²       234_R$
  //                 X   
  //      1_cm²           0.46_R$
  //
  //    234 = 1 * 234 
  //    0.0046_R$ = 234 / 50600
  //
  //  1600_cm² = 80 * 20
  //  
  //  7.36 = 1600_cm² * 0.46_R$ 
  //
  //  = = = = = = = = = = = = = = = = = =
  //  
  //  = = = = = = = = = = = = = = = = = =
  //
  //  225_cm² = 15 * 15 
  //  
  //    7_m² = 2.80 * 2.50
  //
  //    70000_cm² = 7_m² * 10000
  //  
  //      70000_cm²      235_R$
  //                 X
  //      1_cm²          0.34_R$
  //  
  //    235 = (1 * 235)
  //    0.0034 = (235 / 70000)
  //  
  //  76.5_R$ = 225_cm² * 0.34_R$
  //
  //  = = = = = = = = = = = = = = = = = =

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
