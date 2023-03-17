export interface ProductsProps {
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
  status: string;
  products: ProductsProps[];
}

export interface BoardProps {
  title: string;
  orders: OrderProps[];
}
