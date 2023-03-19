import { OrderProps } from '../../types/Order';
import { Container } from './styles';

interface OrderCardProps {
  order: OrderProps;
  handleOpenModal: () => void;
}

export function OrderCard({ order, handleOpenModal }: OrderCardProps) {
  return (
    <Container onClick={handleOpenModal}>
      <h1>{`Mesa ${order.table}`}</h1>
      <span>{`${order.products.length} itens`}</span>
    </Container>
  );
}
