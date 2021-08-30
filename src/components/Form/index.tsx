import { useFormResult } from '../../contexts/FormResultContext';
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
  thickness: string;
}

export default function Form({ componentInputList, handleRemoveComponentInput}: FormProps) {
  const { setInputsMDFResult }  = useFormResult();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const dadosDoForm = new FormData(event.target);

    console.log(dadosDoForm);

    console.log('=============')
    console.log(dadosDoForm.get('width'));
    console.log(dadosDoForm.get('height'));
    console.log(dadosDoForm.get('thickness'));
    console.log('=============')

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

    setInputsMDFResult(inputValuesMDF.reduce((acc, input) => {
      switch(input.thickness) {
        case '3mm':
          acc.total3 += input.height * input.width;
          break;
        case '6mm':
          acc.total6 += input.height * input.width;
          break;
        case '9mm':
          acc.total9 += input.height * input.width;
          break;
          case '12mm':
          acc.total12 += input.height * input.width;
          break;
        case '15mm':
          acc.total15 += input.height * input.width;
          break;
      }
  
      return acc;
    }, {
      total3: 0,
      total6: 0,
      total9: 0,
      total12: 0,
      total15: 0,
    }));
  }

  return (  
    <Container onSubmit={handleSubmit}>
        {
          componentInputList.map((input) => {
            switch (input.type) {
              case 'mdf':
                return <InputsMDF 
                        key={input.id} 
                        id={input.id} 
                        // handleRemoveComponentInput={handleRemoveComponentInput(input.id)} 
                      />
                break;
            }

          })
        }
      <button type="submit">Calcular</button>

    </Container>
  )
}