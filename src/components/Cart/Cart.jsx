export default function Cart() {
  return (
    <dialog className="cart" open>
      <h2>Your Cart</h2>
      <ul>
        <li className="cart-item">
          <p>MEAL 1 - 1 x $1000</p>
          <p className="cart-item-actions">
            <button type="button">-</button>
            <span>1</span>
            <button type="button">+</button>
          </p>
        </li>
      </ul>
      <p className="cart-total">1</p>
      <p className="modal-actions">
        <button type="button" className="text-button">
          Close
        </button>
        <button type="button" className="button">
          Go to Checkout
        </button>
      </p>
    </dialog>
  );
}
