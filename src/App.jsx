import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { CartContextProvider } from './store/CartContext';

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
      {/* <Cart />
  <Checkout /> */}
    </CartContextProvider>
  );
}

export default App;
