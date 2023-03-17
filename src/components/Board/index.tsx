import { BoardProps } from '../../types/Order';
import { OrderCard } from '../OrderCard';
import { Container, ListOrdersContainer } from './styles';

export function Board({ title, orders }: BoardProps) {
  return (
    <Container>
      <h2>{title}</h2>

      <ListOrdersContainer>
        {orders.map((order) => (
          <OrderCard
            itemsQuantity={orders.length}
            key={order._id}
            table={order.table}
          />
        ))}
      </ListOrdersContainer>
    </Container>
  );
}
