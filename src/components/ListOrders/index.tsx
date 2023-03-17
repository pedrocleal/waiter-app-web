import { OrderProps } from '../../types/Order';
import { Board } from '../Board';
import { Container } from './styles';

const orders: OrderProps[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '6',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1668472896991-quatro-queijos.png',
          price: 40,
        },
        quantity: 3,
      },
      {
        product: {
          name: 'Coca cola',
          imagePath: '1668473462705-coca-cola.png',
          price: 7,
        },
        quantity: 2,
      }
    ],
  },
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '3',
    status: 'IN_PRODUCTION',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1668472896991-quatro-queijos.png',
          price: 40,
        },
        quantity: 3,
      },
      {
        product: {
          name: 'Coca cola',
          imagePath: '1668473462705-coca-cola.png',
          price: 7,
        },
        quantity: 2,
      }
    ],
  },
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '2',
    status: 'DONE',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1668472896991-quatro-queijos.png',
          price: 40,
        },
        quantity: 3,
      },
      {
        product: {
          name: 'Coca cola',
          imagePath: '1668473462705-coca-cola.png',
          price: 7,
        },
        quantity: 2,
      }
    ],
  }
];

export function ListOrders() {
  const waitingOrders = orders.filter(order => order.status === 'WAITING');
  const cookingOrders = orders.filter(order => order.status === 'IN_PRODUCTION');
  const readyOrders = orders.filter(order => order.status === 'DONE');

  return (
    <Container>
      <Board
        title={`🕜 Fila de espera (${orders.length})`}
        orders={waitingOrders}
      />
      <Board
        title={`🧑🏾‍🍳 Em produção (${orders.length})`}
        orders={cookingOrders}
      />
      <Board
        title={`✅ Pronto (${orders.length})`}
        orders={readyOrders}
      />
    </Container>
  );
}
