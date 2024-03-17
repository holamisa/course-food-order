import { CartContextProvider } from './store/CartContext';
import { ModalContextProvider } from './store/ModalContext';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <ModalContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </ModalContextProvider>
  );
}

export default App;
