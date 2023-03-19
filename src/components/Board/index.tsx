import { useState } from 'react';
import { BoardProps, OrderProps } from '../../types/Order';
import { OrderCard } from '../OrderCard';
import { OrderModal } from '../OrderModal';
import { Container, ListOrdersContainer } from './styles';

export function Board({ title, orders }: BoardProps) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderProps | null>(null);

  function handleOpenModal(order: OrderProps) {
    setIsModalOpen(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setSelectedOrder(null);
  }

  return (
    <Container>

      <OrderModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        order={selectedOrder}
      />

      <h3>{title}</h3>

      {orders.length > 0 && (
        <ListOrdersContainer>
          {orders.map((order) => (
            <OrderCard
              key={order._id}
              order={order}
              handleOpenModal={() => handleOpenModal(order)}
            />
          ))}
        </ListOrdersContainer>
      )}
    </Container>
  );
}
