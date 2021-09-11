import { usePrice } from '../../../contexts/PriceContext';

import { Li } from './styles';

type formMdfPriceProps = {
  id: number;
  showLiInputs: (id: string) => void;
}

export function FormMdfPrice({ id, showLiInputs }: formMdfPriceProps) {

  const { mdfPrice, updatePrice }  = usePrice();

  const mdfData = mdfPrice.find((mdf) => mdf.id === id);

  return (
    <Li>
      <button onClick={() => showLiInputs(`mdf${id}`)}>
        {id}mm
      </button>
      <form 
        onSubmit={(event) => {
          event.preventDefault(); 
          updatePrice({
            id,
            value: Number(new FormData(event.target).get('value')),
          });
        }} 
        id={`mdf${id}`} 
        hidden
      >
        <label>
          Valor
          <input name="value" type="number" defaultValue={mdfData?.value}/>
        </label>

        <button type="submit">✓</button>
      </form>
    </Li>
  )
}