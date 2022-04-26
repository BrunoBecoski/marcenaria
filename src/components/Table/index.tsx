import { OrderData } from '../../types/OrderData';

import { Container } from './styles';

interface TableProps {
  ordersData: OrderData[];
}

export function Table({ ordersData }: TableProps) {
  return (
    <Container>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {
          ordersData.map((order) => (
            <tr key={order.id}>
              <td>{order.type}</td>
              <td>{order.name}</td>
              <td>{order.description}</td>
              <td>{order.price}</td>
              <td>{order.date}</td>
            </tr>
          ))
        }
      </tbody>
    </Container>
  );
}