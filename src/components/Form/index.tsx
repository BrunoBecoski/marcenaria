import { useFormResult } from '../../contexts/FormResultContext';
import { useMdf } from '../../contexts/MdfContext';
import InputsMDF from './InputsMDF';

import { Container } from './styles';

type InputComponentProps = {
  id: number;
  type: 'mdf',
}

type FormProps = {
  componentInputList: InputComponentProps[];
  handleRemoveComponentInput: (id: number) => void;
}

type inputValuesMDFProps = {
  width: number;
  height: number;
  thickness: '3mm' | '6mm' | '9mm' | '12mm' | '15mm';
}

export default function Form() {
  const { setInputsMDFValues }  = useFormResult();
  const { createMdfBox, handleAddMdfBox } = useMdf();

  const group3 = createMdfBox.filter((data) => data.group === "3mm");
  const group6 = createMdfBox.filter((data) => data.group === "6mm");
  const group9 = createMdfBox.filter((data) => data.group === "9mm");
  const group12 = createMdfBox.filter((data) => data.group === "12mm");
  const group15 = createMdfBox.filter((data) => data.group === "15mm");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    // console.log(document.getElementById(createMdfBox[1].id));

    // console.log(document.getElementById(`width_${createMdfBox[0].id}`).value);
    // console.log(document.getElementById(`length_${createMdfBox[0].id}`).value);

    console.log(group3)

    // let inputValuesMDF: inputValuesMDFProps[] = [];
  
    // if(componentInputList.length === 1) {
    //   const inputValue = {
    //     width: event.target.width.value,
    //     height: event.target.height.value,
    //     thickness: event.target.thickness.value
    //   }
    //   inputValuesMDF.push(inputValue)
    // } else {
    //   for (let index = 0; index < componentInputList.length; index++) {
    //     const inputValue = {
    //       width: event.target.width[index].value,
    //       height: event.target.height[index].value,
    //       thickness: event.target.thickness[index].value
    //     }
    //     inputValuesMDF.push(inputValue)
    //   }
    // }

    // setInputsMDFValues(inputValuesMDF);
  }

  return (  
    <Container onSubmit={handleSubmit}>
      <h2>Formulário</h2>
      <div>
        <div>
          <h3>3mm - {group3.length}</h3>
          <button onClick={(event) => {
            event.preventDefault()
            handleAddMdfBox('3mm')
          }}>+</button>
          {group3.map((item) => 
            <InputsMDF 
              id={item.id}
              key={item.id}
              thick={item.thick}
              width={item.width}
              height={item.height}
            />
          )}
        </div>

        <div>
          <h3>6mm - {group6.length}</h3>
          <button onClick={(event) => {
            event.preventDefault()
            handleAddMdfBox('6mm')
          }}>+</button>
          {group6.map((item) => 
            <InputsMDF 
              id={item.id}
              key={item.id}
              thick={item.thick}
              width={item.width}
              height={item.height}
            />
          )}
        </div>

        <div>
          <h3>9mm - {group9.length}</h3>
          <button onClick={(event) => {
            event.preventDefault()
            handleAddMdfBox('9mm')
          }}>+</button>
          {group9.map((item) => 
            <InputsMDF 
              id={item.id}
              key={item.id}
              thick={item.thick}
              width={item.width}
              height={item.height}
            />
          )}
        </div>

        <div>
          <h3>12mm - {group12.length}</h3>
          <button onClick={(event) => {
            event.preventDefault()
            handleAddMdfBox('12mm')
          }}>+</button>
          {group12.map((item) => 
            <InputsMDF 
              id={item.id}
              key={item.id}
              thick={item.thick}
              width={item.width}
              height={item.height}
            />
          )}
        </div>

        <div>
          <h3>15mm - {group15.length}</h3>
          <button onClick={(event) => {
            event.preventDefault()
            handleAddMdfBox('15mm')
          }}>+</button>
          {group15.map((item) => 
            <InputsMDF 
              id={item.id}
              key={item.id}
              thick={item.thick}
              width={item.width}
              height={item.height}
            />
          )}
        </div>
      </div>

      <button type="submit">Calcular</button>
    </Container>
  )
}
