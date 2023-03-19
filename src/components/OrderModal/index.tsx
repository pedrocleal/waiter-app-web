import closeModal from '../../assets/images/close-icon.svg';
import { OrderProps } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

import { Overlay, ModalBody, StatusContainer, OrderDetails, OrderTotal, ModalActions } from './styles';

interface OrderModalProps {
  isOpen: boolean;
  order: OrderProps | null;
  onClose: () => void;
}

export function OrderModal({ isOpen, order, onClose }: OrderModalProps) {
  if (!isOpen || !order) return null;

  const total = order.products.reduce((acc, { product, quantity }) => {
    return acc + product.price * quantity;
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type="button" onClick={onClose}>
            <img src={closeModal} alt="Fechar modal" />
          </button>
        </header>

        <StatusContainer>
          <small>Status do pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕑'}
              {order.status === 'IN_PRODUCTION' && '👨‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Aguardando'}
              {order.status === 'IN_PRODUCTION' && 'Em produção'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>
        </StatusContainer>

        <OrderDetails>
          {order.products.map(({ _id, product, quantity }) => (
            <div className="item" key={_id}>
              <img
                src={`http://localhost:3001/uploads/${product.imagePath}`}
                alt={product.name}
                width={56}
                height={30}
              />

              <span className="quantity">{quantity}x</span>

              <div className="product-details">
                <strong>{product.name}</strong>
                <span>{formatCurrency(product.price)}</span>
              </div>
            </div>
          ))}
        </OrderDetails>

        <OrderTotal>
          <span>Total</span>
          <strong>{formatCurrency(total)}</strong>
        </OrderTotal>

        <ModalActions>
          <button
            className='primary'
            type="button"
            onClick={onClose}
          >
            <span>🧑🏾‍🍳</span>
            <span>Iniciar produção</span>
          </button>
          <button
            className='secondary'
            type="button"
            onClick={onClose}
          >
            Cancelar pedido
          </button>
        </ModalActions>
      </ModalBody>

    </Overlay>
  );
}
