import Input from '../UI/Input';
import Error from '../Error/Error';

export default function Checkout() {
  const error = true;

  if (!error) {
    return (
      <dialog className="modal" open>
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p className="modal-actions">
          <button type="button" className="button">
            Okay
          </button>
        </p>
      </dialog>
    );
  }
  return (
    <dialog className="modal" open>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: $1000</p>

        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        {error && <Error title="Failed to submit order" message={error} />}

        <p className="modal-actions">
          <button type="button" className="text-button">
            Close
          </button>
          <button type="button" className="button">
            Submit Order
          </button>
        </p>
      </form>
    </dialog>
  );
}
