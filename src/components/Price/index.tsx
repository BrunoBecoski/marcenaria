import { Container } from './styles';

import { FormMdfPrice } from './FormMdfPrice';

export default function Price() {

  function showLiInputs(id: string) {
    const allLi = ['mdf3', 'mdf6', 'mdf9', 'mdf12', 'mdf15'];
    const allLiHidden = allLi.filter((liId) => liId !== id);

    if(id === 'mdf0') {
      allLi.forEach((liId) => {
        document.getElementById(liId).hidden = true;
      });
    } else {
      const liClick = document.getElementById(id);
      liClick.hidden = !liClick.hidden;
      

      allLiHidden.forEach((liId) => {
        document.getElementById(liId).hidden = true;
      });
    }
  } 

  return (
    <Container>
      <h2>Preço</h2>

      <ul>
        <li>
          <div>
            <button onClick={() => {
              const ul = document.getElementById('mdf');  
              ul.hidden = !ul.hidden;
              showLiInputs('mdf0');
            }}>
              MDF
            </button>
            
            <ul id="mdf" hidden>

              <FormMdfPrice 
                id="3"
                showLiInputs={showLiInputs}
              />

              <FormMdfPrice 
                id="6"
                showLiInputs={showLiInputs}
              />

              <FormMdfPrice 
                id="9"
                showLiInputs={showLiInputs}
              />

              <FormMdfPrice 
                id="12"
                showLiInputs={showLiInputs}
              />
                     
              <FormMdfPrice 
                id="15"
                showLiInputs={showLiInputs}
              />

            </ul>
          </div>

        </li>

      </ul>
    </Container>
  )
}