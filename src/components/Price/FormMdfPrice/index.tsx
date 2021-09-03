import { Li } from './styles';

type formMdfPriceProps = {
  id: string;
  showLiInputs: (id: string) => void;
}

export function FormMdfPrice({ id, showLiInputs }: formMdfPriceProps) {
  return (
    <Li>
      <button onClick={() => showLiInputs(`mdf${id}`)}>
        {id}mm
      </button>
      <div id={`mdf${id}`} hidden>
        <label htmlFor={`mdf${id}value"`}>
          Valor
        </label>
        <input id={`mdf${id}value"`} />

        <label htmlFor={`mdf${id}cm"`}>
          cm²
        </label>
        <input id={`mdf${id}cm"`} />
        
        <button>✓</button>
      </div>
    </Li>
  )
}