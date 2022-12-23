import { useEffect, useState } from 'react';

import { useGetClientsQuery } from '../../../../graphql/generated';

import {
  ListWithRadioButton,
  ListContentTypes,
} from '../../../../components/MaterialDesign'

import { SelectClientContainer } from './styles'

interface SelectClientProps {
  setClientSelected: (value: ListContentTypes | undefined) => void;
}

export function SelectClient({ setClientSelected }: SelectClientProps) {
  const [clients, setClients] = useState<ListContentTypes[]>([]);

  const { data, loading } = useGetClientsQuery();

  useEffect(() => {
    if(data) {
      setClients(data.clients.map(client => {
        return {
          id: client.id,
          text: client.name,
        }
      }))
    }
  }, [loading])

  return (
    <SelectClientContainer>
      { !loading &&
          <ListWithRadioButton
            icon="person"
            content={clients}
            setSelected={setClientSelected}
        />
      }
    </SelectClientContainer>
  )
}