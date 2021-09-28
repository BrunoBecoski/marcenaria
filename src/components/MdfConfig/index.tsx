import { useState } from 'react'; 

import { useMdf } from '../../contexts/MdfContext';

import { Container } from './styles';

export default function MdfConfig() {
  const { isMdfOpen, handleAddNewMdfBox  } = useMdf();

  const [rangeValue, setRangeValue] = useState(1);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    handleAddNewMdfBox({
      thick: new FormData(event.target).get('thick'),
      range: rangeValue,
    })
  }

  if(isMdfOpen) {
    return (
      <Container>
        <h2>
          MDF
        </h2>

        <form onSubmit={handleSubmit}>
          <div>
            <h3>Espessura</h3>
            <label>
              <input name="thick" type="radio" value="3mm"/>
              3mm
            </label>

            <label>
              <input name="thick" type="radio" value="6mm"/>
              6mm
            </label>

            <label>
              <input name="thick" type="radio" value="9mm"/>
              9mm
            </label>
            
            <label>
              <input name="thick" type="radio" value="12mm" defaultChecked />
              12mm
            </label>

            <label>
              <input name="thick" type="radio" value="15mm"/>
              15mm
            </label>
          </div>

          <div>
            <h3>Quantidade</h3>
            <label>
              <input 
                type="number" 
                min="1" 
                max="20"
                value={rangeValue}
                onChange={(e) => setRangeValue(Number(e.target.value))}
              />
              <input 
                type="range" 
                min="1" 
                max="20"
                value={rangeValue} 
                onChange={(e) => setRangeValue(Number(e.target.value))}
              />
            </label>
          </div>

          <button type="submit">Criar</button>
        </form>


      </Container>
    )
  }


  return (
    <>
    </>
  )
} 