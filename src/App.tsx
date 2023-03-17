import { Header } from './components/Header';
import { ListOrders } from './components/ListOrders';
import { GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <ListOrders />
    </>
  );
}
