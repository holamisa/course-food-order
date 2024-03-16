import { createContext, useMemo, useState } from 'react';

const ModalContext = createContext({
  modalType: '',
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function ModalContextProvider({ children }) {
  const [type, setType] = useState('');

  const showCart = () => setType('cart');
  const hideCart = () => setType('');
  const showCheckout = () => setType('checkout');
  const hideCheckout = () => setType('');

  const modalCtx = useMemo(
    () => ({
      modalType: type,
      showCart,
      hideCart,
      showCheckout,
      hideCheckout,
    }),
    [type],
  );

  return (
    <ModalContext.Provider value={modalCtx}>{children}</ModalContext.Provider>
  );
}

export default ModalContext;
