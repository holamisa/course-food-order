import { useContext } from 'react';

import ModalContext from '../../store/ModalContext';
import CartContext from '../../store/CartContext';
import Input from '../UI/Input';
import Error from '../Error/Error';
import useInput from '../../hooks/useInput';
import DialogModal from '../UI/Modal';
import { isValidEmail, isNotEmpty } from '../../utils/inputValidation';
import useHttp from '../../hooks/useHttp';
import SERVER_URL from '../../constants/serverInfo';
import formatting from '../../utils/formatting';

const requestConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

function Checkout() {
  console.log('Checkout Component');
  const cartCtx = useContext(CartContext);
  const modalCtx = useContext(ModalContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp(`${SERVER_URL}/orders`, requestConfig);

  const {
    value: nameValue,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    hasError: hasNameError,
  } = useInput('', (value) => isNotEmpty(value));

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handEmailBlur,
    hasError: hasEmailError,
  } = useInput('', (value) => isNotEmpty(value) && isValidEmail(value));

  const {
    value: streetValue,
    handleInputChange: handleStreetChange,
    handleInputBlur: handleStreetBlur,
    hasError: hasStreetError,
  } = useInput('', (value) => isNotEmpty(value));

  const {
    value: postalCodeValue,
    handleInputChange: handlePostalCodeChange,
    handleInputBlur: handlePostalCodeBlur,
    hasError: hasPostalCodeError,
  } = useInput('', (value) => isNotEmpty(value));

  const {
    value: cityValue,
    handleInputChange: handleCityChange,
    handleInputBlur: handleCityBlur,
    hasError: hasCityError,
  } = useInput('', (value) => isNotEmpty(value));

  function handleShowCart() {
    modalCtx.hideCheckout();
  }

  function handleFinishOrder() {
    modalCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());
    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    );
  }

  const cartTotalPrice = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0,
  );

  let dialogActions = (
    <>
      <button
        type="button"
        className="text-button"
        onClick={() => handleShowCart()}
      >
        Close
      </button>
      <button type="submit" className="button">
        Submit Order
      </button>
    </>
  );

  if (isSending) {
    dialogActions = <span>Sending order data...</span>;
  }

  if (data && !error) {
    return (
      <DialogModal
        open={modalCtx.modalType === 'checkout'}
        onClose={() => handleFinishOrder()}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p className="modal-actions">
          <button
            type="button"
            className="button"
            onClick={() => handleFinishOrder()}
          >
            Okay
          </button>
        </p>
      </DialogModal>
    );
  }

  return (
    <DialogModal
      open={modalCtx.modalType === 'checkout'}
      onClose={() => handleShowCart()}
    >
      <form onSubmit={(event) => handleSubmit(event)}>
        <h2>Checkout</h2>
        <p>Total Amount: {formatting.format(cartTotalPrice)}</p>

        <Input
          label="Full Name"
          type="text"
          id="full-name"
          onBlur={handleNameBlur}
          onChange={handleNameChange}
          value={nameValue}
          error={hasNameError && 'Invalid Full Name'}
        />
        <Input
          label="E-Mail Address"
          type="email"
          id="email"
          onBlur={handEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={hasEmailError && 'Invalid E-Mail Address'}
        />
        <Input
          label="Street"
          type="text"
          id="street"
          onBlur={handleStreetBlur}
          onChange={handleStreetChange}
          value={streetValue}
          error={hasStreetError && 'Invalid Street'}
        />
        <div className="control-row">
          <Input
            label="Postal Code"
            type="text"
            id="postal-code"
            onBlur={handlePostalCodeBlur}
            onChange={handlePostalCodeChange}
            value={postalCodeValue}
            error={hasPostalCodeError && 'Invalid Postal Code'}
          />
          <Input
            label="City"
            type="text"
            id="city"
            onBlur={handleCityBlur}
            onChange={handleCityChange}
            value={cityValue}
            error={hasCityError && 'Invalid City'}
          />
        </div>

        {error && <Error title="Failed to submit order" message={error} />}

        <p className="modal-actions">{dialogActions}</p>
      </form>
    </DialogModal>
  );
}

export default Checkout;
