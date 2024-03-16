import { useRef } from 'react';

import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import { CartContextProvider } from './store/CartContext';
import { ModalContextProvider } from './store/ModalContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <ModalContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        {/* <Checkout /> */}
      </CartContextProvider>
    </ModalContextProvider>
  );
}

export default App;
