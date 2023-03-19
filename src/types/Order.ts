export interface ProductsProps {
  _id: string;
  product: {
    name: string;
    imagePath: string;
    price: number;
  },
  quantity: number;
}

export interface OrderProps {
  _id: string;
  table: string;
  status: 'DONE' | 'IN_PRODUCTION' | 'WAITING';
  products: ProductsProps[];
}

export interface BoardProps {
  title: string;
  orders: OrderProps[];
}
