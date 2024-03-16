import { useContext } from 'react';

import CartContext from '../../store/CartContext';
import ModalContext from '../../store/ModalContext';
import CartItem from './CartItem';
import currencyFormatter from '../../utils/formatting';
import DialogModal from '../UI/Modal';

function Cart() {
  const cartCtx = useContext(CartContext);
  const modalCtx = useContext(ModalContext);

  const hasItemsInCart = cartCtx.items.length > 0;

  const cartTotalPrice = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0,
  );

  const handleHideCartModal = () => {
    modalCtx.hideCart();
  };

  const handleShowCheckoutModal = () => {
    modalCtx.showCheckout();
  };

  return (
    <DialogModal
      className="cart"
      open={modalCtx.modalType === 'cart'}
      onClose={modalCtx.modalType === 'cart' ? handleHideCartModal : null}
    >
      <h2>Your Cart</h2>
      {!hasItemsInCart && <p>No items in cart!</p>}
      <ul>
        {hasItemsInCart &&
          cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onIncrease={() => cartCtx.addItem(item)}
              onDecrease={() => cartCtx.removeItem(item.id)}
            />
          ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotalPrice)}</p>
      <p className="modal-actions">
        <button
          type="button"
          className="text-button"
          onClick={handleHideCartModal}
        >
          Close
        </button>
        {hasItemsInCart && (
          <button
            type="button"
            className="button"
            onClick={handleShowCheckoutModal}
          >
            Go to Checkout
          </button>
        )}
      </p>
    </DialogModal>
  );
}

export default Cart;
