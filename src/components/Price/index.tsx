import { FormMdfPrice } from './FormMdfPrice';

import { Container } from './styles';

export default function Price() {

  function showLiInputs(id: string) {
    const allLi = ['mdf3', 'mdf6', 'mdf9', 'mdf12', 'mdf15'];
    const allLiHidden = allLi.filter((liId) => liId !== id);

    if(id === 'mdf0') {
      // hide all li 
      allLi.forEach((liId) => {
        const li = document.getElementById(liId);
        if (li) {
          li.hidden = true;
        }
      });
    } else {
      // show li click hide others
      const liClick = document.getElementById(id);
      if(liClick) {
        liClick.hidden = !liClick.hidden;
      }      

      allLiHidden.forEach((liId) => {
        const liClick =  document.getElementById(liId);
        if (liClick) {
          liClick.hidden = true;
        }
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
              if(ul) {
                ul.hidden = !ul.hidden;
              }
              showLiInputs('mdf0');
            }}>
              MDF
            </button>
            
            <ul id="mdf" hidden>

              <FormMdfPrice 
                id={3}
                showLiInputs={showLiInputs}
              />

              <FormMdfPrice 
                id={6}
                showLiInputs={showLiInputs}
              />

              <FormMdfPrice 
                id={9}
                showLiInputs={showLiInputs}
              />

              <FormMdfPrice 
                id={12}
                showLiInputs={showLiInputs}
              />
                     
              <FormMdfPrice 
                id={15}
                showLiInputs={showLiInputs}
              />

            </ul>
          </div>

        </li>

      </ul>
    </Container>
  )
}