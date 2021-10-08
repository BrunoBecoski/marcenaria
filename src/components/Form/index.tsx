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

export default function Form({ componentInputList, handleRemoveComponentInput}: FormProps) {
  const { setInputsMDFValues }  = useFormResult();
  const { createMdfBox } = useMdf();

  const group3 = createMdfBox.filter((data) => data.group === "3mm");
  const group6 = createMdfBox.filter((data) => data.group === "6mm");
  const group9 = createMdfBox.filter((data) => data.group === "9mm");
  const group12 = createMdfBox.filter((data) => data.group === "12mm");
  const group15 = createMdfBox.filter((data) => data.group === "15mm");

  console.log(group3)
  console.log(group6)
  console.log(group9)
  console.log(group12)
  console.log(group15)

  // function handleSubmit(event: React.FormEvent) {
  //   event.preventDefault();

  //   let inputValuesMDF: inputValuesMDFProps[] = [];
  
  //   if(componentInputList.length === 1) {
  //     const inputValue = {
  //       width: event.target.width.value,
  //       height: event.target.height.value,
  //       thickness: event.target.thickness.value
  //     }
  //     inputValuesMDF.push(inputValue)
  //   } else {
  //     for (let index = 0; index < componentInputList.length; index++) {
  //       const inputValue = {
  //         width: event.target.width[index].value,
  //         height: event.target.height[index].value,
  //         thickness: event.target.thickness[index].value
  //       }
  //       inputValuesMDF.push(inputValue)
  //     }
  //   }

  //   setInputsMDFValues(inputValuesMDF);
  // }

  return (  
    <Container>
      <div>
        <div>
          <h3>3mm</h3>
          {group3.map((item) => 
            <InputsMDF 
            id={item.id}
            key={item.id}
            thick={item.thick}
            />
          )}
        </div>

        <div>
          <h3>6mm</h3>
          {group6.map((item) => 
            <InputsMDF 
            id={item.id}
            key={item.id}
            thick={item.thick}
            />
          )}
        </div>

        <div>
          <h3>9mm</h3>
          {group9.map((item) => 
            <InputsMDF 
            id={item.id}
            key={item.id}
            thick={item.thick}
            />
          )}
        </div>

        <div>
          <h3>12mm</h3>
          {group12.map((item) => 
            <InputsMDF 
            id={item.id}
            key={item.id}
            thick={item.thick}
            />
          )}
        </div>

        <div>
          <h3>15mm</h3>
          {group15.map((item) => 
            <InputsMDF 
            id={item.id}
            key={item.id}
            thick={item.thick}
            />
          )}
        </div>
      </div>

      <button type="submit">Calcular</button>
    </Container>
  )
}
