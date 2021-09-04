import { usePrice } from '../../../contexts/PriceContext';

import { Li } from './styles';

type formMdfPriceProps = {
  id: number;
  showLiInputs: (id: string) => void;
}

export function FormMdfPrice({ id, showLiInputs }: formMdfPriceProps) {

  const { mdfPrice }  = usePrice();

  const asd = mdfPrice.find((mdf) => mdf.id === id);

  return (
    <Li>
      <button onClick={() => showLiInputs(`mdf${id}`)}>
        {id}mm
      </button>
      <div id={`mdf${id}`} hidden>
        <label>
          Valor
          <input defaultValue={asd?.value || 0}/>
        </label>

        <label >
          cm²
          <input defaultValue={asd?.cm1 || 0}/>
          <input defaultValue={asd?.cm2 || 0}/>
        </label>
        <button>✓</button>
      </div>
    </Li>
  )
}