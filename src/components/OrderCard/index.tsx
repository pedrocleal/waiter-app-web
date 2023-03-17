import { Container } from './styles';

interface OrderCardProps {
  table: string;
  itemsQuantity: number;
}

export function OrderCard({ table, itemsQuantity }: OrderCardProps) {
  return (
    <Container>
      <h1>{`Mesa ${table}`}</h1>
      <span>{`${itemsQuantity} itens`}</span>
    </Container>
  );
}
