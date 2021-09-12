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
        id={`mdf${id}`} 
        hidden
        onSubmit={(event) => {
          event.preventDefault(); 
          updatePrice({
            id,
            price: Number(new FormData(event.target).get('value')),
          });
        }} 
      >
        <label>
          Valor
          <input name="value" type="number" defaultValue={mdfData?.price}/>
        </label>

        <button type="submit">✓</button>
      </form>
    </Li>
  )
}