import { useState } from 'react';

import { Container, Thickness, Range } from './styles';

export default function MdfCreate() {
  const [rangeValue, setRangeValue] = useState(1);
  const [thickValue, setThickValue] = useState('12mm');

  function handleCreate(event) {
    event.preventDefault();
    console.log('submit');
    console.log(rangeValue);
    console.log(thickValue);
  }

  return (
    <Container>
      <form onSubmit={handleCreate}>
        <Thickness>
          <h2>Espessura</h2>
          <label
            style={{
              color: (thickValue == '3mm' ? '#007df9' : 'white'),
              background: (thickValue == '3mm' ? 'white' : ''),
              borderColor: (thickValue == '3mm' ? '#007df9' : 'white')
            }}
          >
            <input name="thick" type="radio" value="3mm" onClick={() => setThickValue('3mm')} />
            3mm
          </label>

          <label
            style={{
              color: (thickValue == '6mm' ? '#007df9' : 'white'),
              background: (thickValue == '6mm' ? 'white' : ''),
              borderColor: (thickValue == '6mm' ? '#007df9' : 'white')
            }}
          >
            <input
              name="thick" type="radio" value="6mm"
              onClick={() => setThickValue('6mm')}
            />
            6mm
          </label>

          <label
            style={{
              color: (thickValue == '9mm' ? '#007df9' : 'white'),
              background: (thickValue == '9mm' ? 'white' : ''),
              borderColor: (thickValue == '9mm' ? '#007df9' : 'white')
            }}
          >
            <input name="thick" type="radio" value="9mm" onClick={() => setThickValue('9mm')} />
            9mm
          </label>

          <label
            style={{
              color: (thickValue == '12mm' ? '#007df9' : 'white'),
              background: (thickValue == '12mm' ? 'white' : ''),
              borderColor: (thickValue == '12mm' ? '#007df9' : 'white')
            }}
          >
            <input name="thick" type="radio" value="12mm" onClick={() => setThickValue('12mm')} defaultChecked />
            12mm
          </label>

          <label
            style={{
              color: (thickValue == '15mm' ? '#007df9' : 'white'),
              background: (thickValue == '15mm' ? 'white' : ''),
              borderColor: (thickValue == '15mm' ? '#007df9' : 'white')
            }}
          >
            <input name="thick" type="radio" value="15mm" onClick={() => setThickValue('15mm')} />
            15mm
          </label>
        </Thickness>

        <Range>
          <h2>Quantidade</h2>
          <label>
            <input
              type="number"
              min="1"
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
        </Range>

        <button type="submit">Criar</button>
      </form>
    </Container >
  );
}