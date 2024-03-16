import { useContext } from 'react';
import logoImg from '../../assets/logo.jpg';
import CartContext from '../../store/CartContext';
import ModalContext from '../../store/ModalContext';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const modalCtx = useContext(ModalContext);

  const handleShowCartModal = () => {
    modalCtx.showCart();
  };

  const totalCartItems = cartCtx.items.reduce((totalCount, item) => {
    return totalCount + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <button
          type="button"
          className="text-button"
          onClick={() => handleShowCartModal()}
        >
          Cart ({totalCartItems})
        </button>
      </nav>
    </header>
  );
}
