import { OrderProps } from '../../types/Order';
import { Board } from '../Board';
import { Container } from './styles';

const orders: OrderProps[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '6',
    status: 'DONE',
    products: [
      {
        _id: '6372e48cbcd195b0d3d0f7f4',
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1678933417830-quatro-queijos.png',
          price: 40,
        },
        quantity: 3,
      },
      {
        _id: '6372e48cbcd195213d0f7f3',
        product: {
          name: 'Coca cola',
          imagePath: '1678933903604-coca-cola.png',
          price: 7,
        },
        quantity: 2,
      }
    ],
  },
];

export function ListOrders() {
  const waitingOrders = orders.filter(order => order.status === 'WAITING');
  const cookingOrders = orders.filter(order => order.status === 'IN_PRODUCTION');
  const readyOrders = orders.filter(order => order.status === 'DONE');

  return (
    <Container>
      <Board
        title={`🕜 Fila de espera (${waitingOrders.length})`}
        orders={waitingOrders}
      />
      <Board
        title={`🧑🏾‍🍳 Em produção (${cookingOrders.length})`}
        orders={cookingOrders}
      />
      <Board
        title={`✅ Pronto (${readyOrders.length})`}
        orders={readyOrders}
      />
    </Container>
  );
}
