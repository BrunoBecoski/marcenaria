import { Container } from './styles';

export default function Price() {

  return (
    <Container>
      <h2>Preço</h2>

      <ul>
        <li>
          <div>
            <button onClick={() => {
              const ul = document.getElementById('mdf');  
              ul.hidden = !ul.hidden;
            }}>
              MDF
            </button>
            
            <ul id="mdf" hidden>
              <li>
                <button
                  onClick={() => {
                    const li3 = document.getElementById('mdf3');
                    const li6 = document.getElementById('mdf6');
                    const li9 = document.getElementById('mdf9');
                    const li12 = document.getElementById('mdf12');
                    const li15 = document.getElementById('mdf15');

                    li3.hidden = !li3.hidden;

                    li6.hidden = true;
                    li9.hidden = true;
                    li12.hidden = true;
                    li15.hidden = true;
                  }}
                >
                  3mm
                </button>
                <div className="mdf" id="mdf3" hidden>
                  <label>
                    Valor
                    <input />
                  </label>
                  <label>
                    cm²
                    <input />
                  </label>
                </div>
              </li>

              <li>
                <button
                  onClick={() => {
                    const li3 = document.getElementById('mdf3');
                    const li6 = document.getElementById('mdf6');
                    const li9 = document.getElementById('mdf9');
                    const li12 = document.getElementById('mdf12');
                    const li15 = document.getElementById('mdf15');

                    li6.hidden = !li6.hidden;

                    li3.hidden = true;
                    li9.hidden = true;
                    li12.hidden = true;
                    li15.hidden = true;
                  }}
                >
                  6mm
                </button>
                <div className="mdf" id="mdf6" hidden>
                  <label>
                    Valor
                    <input />
                  </label>
                  <label>
                    cm²
                    <input />
                  </label>
                </div>
              </li>

              <li>
                <button
                  onClick={() => {
                    const li3 = document.getElementById('mdf3');
                    const li6 = document.getElementById('mdf6');
                    const li9 = document.getElementById('mdf9');
                    const li12 = document.getElementById('mdf12');
                    const li15 = document.getElementById('mdf15');

                    li9.hidden = !li9.hidden;

                    li3.hidden = true;
                    li6.hidden = true;
                    li12.hidden = true;
                    li15.hidden = true;
                  }}
                >
                  9mm
                </button>
                <div className="mdf" id="mdf9" hidden>
                  <label>
                    Valor
                    <input />
                  </label>
                  <label>
                    cm²
                    <input />
                  </label>
                </div>
              </li>

              <li>
                <button
                  onClick={() => {
                    const li3 = document.getElementById('mdf3');
                    const li6 = document.getElementById('mdf6');
                    const li9 = document.getElementById('mdf9');
                    const li12 = document.getElementById('mdf12');
                    const li15 = document.getElementById('mdf15');

                    li12.hidden = !li12.hidden;

                    li3.hidden = true;
                    li6.hidden = true;
                    li9.hidden = true;
                    li15.hidden = true;
                  }}
                >
                  12mm
                </button>
                <div className="mdf" id="mdf12" hidden>
                  <label>
                    Valor
                    <input />
                  </label>
                  <label>
                    cm²
                    <input />
                  </label>
                </div>
              </li>

              <li>
                <button
                  onClick={() => {
                    const li3 = document.getElementById('mdf3');
                    const li6 = document.getElementById('mdf6');
                    const li9 = document.getElementById('mdf9');
                    const li12 = document.getElementById('mdf12');
                    const li15 = document.getElementById('mdf15');

                    li15.hidden = !li15.hidden;

                    li3.hidden = true;
                    li6.hidden = true;
                    li9.hidden = true;
                    li12.hidden = true;
                  }}
                >
                  15mm
                </button>
                <div className="mdf" id="mdf15" hidden>
                  <label>
                    Valor
                    <input />
                  </label>
                  <label>
                    cm²
                    <input />
                  </label>
                </div>
              </li>

            </ul>
          </div>

        </li>

      </ul>
    </Container>
  )
}