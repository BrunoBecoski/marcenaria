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

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    let inputValuesMDF: inputValuesMDFProps[] = [];
  
    if(componentInputList.length === 1) {
      const inputValue = {
        width: event.target.width.value,
        height: event.target.height.value,
        thickness: event.target.thickness.value
      }
      inputValuesMDF.push(inputValue)
    } else {
      for (let index = 0; index < componentInputList.length; index++) {
        const inputValue = {
          width: event.target.width[index].value,
          height: event.target.height[index].value,
          thickness: event.target.thickness[index].value
        }
        inputValuesMDF.push(inputValue)
      }
    }

    setInputsMDFValues(inputValuesMDF);
  }

  console.log(createMdfBox)

  return (  
    <Container onSubmit={handleSubmit}>
      {createMdfBox.map((item) => 
        <InputsMDF 
          id={item}
          key={item}
          thick={item}
        />
      )}

        <InputsMDF 
          id={'test'}
          key={'test'}
          thick={'test'}
        />  
      

        <InputsMDF 
          id={createMdfBox[0].id}
          key={createMdfBox[0].id}
          thick={createMdfBox[0].thick}
        />

      <button type="submit">Calcular</button>
    </Container>
  )
}
