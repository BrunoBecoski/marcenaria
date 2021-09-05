import { usePrice } from '../../../contexts/PriceContext';

import { Li } from './styles';

type formMdfPriceProps = {
  id: number;
  showLiInputs: (id: string) => void;
}

export function FormMdfPrice({ id, showLiInputs }: formMdfPriceProps) {

  const { mdfPrice, updatePrice }  = usePrice();

  const asd = mdfPrice.find((mdf) => mdf.id === id);

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
            value: new FormData(event.target).get('value'),
            cm1: new FormData(event.target).get('cm1'),
            cm2: new FormData(event.target).get('cm2'),
          });
        }} 
        id={`mdf${id}`} 
        hidden
      >
        <label>
          Valor
          <input name="value" defaultValue={asd?.value || 0}/>
        </label>

        <label >
          cm²
          <input name="cm1" defaultValue={asd?.cm1 || 0}/>
          <input name="cm2" defaultValue={asd?.cm2 || 0}/>
        </label>
        <button type="submit">✓</button>
      </form>
    </Li>
  )
}