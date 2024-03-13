import { createContext, useReducer, useMemo } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const updatedItems = [...state.items];

      const existingCartItemIdx = state.items.findIndex(
        (item) => item.id === action.item.id,
      );

      // 존재하는 상품
      if (existingCartItemIdx > -1) {
        const existingCartItem = state.items[existingCartItemIdx];
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIdx] = updatedItem;
      }
      // 신규 추가 상품
      else {
        updatedItems.push({ ...action.item, quantity: 1 });
      }

      return { ...state, items: updatedItems };
    }
    case 'REMOVE_ITEM': {
      const existingCartItemIdx = state.items.findIndex(
        (item) => item.id === action.id,
      );
      const existingCartItem = state.items[existingCartItemIdx];

      const updatedItems = [...state.items];

      if (existingCartItem) {
        // 한개 이상 등록했으면 하나씩 차감
        if (existingCartItem.quantity > 1) {
          const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity - 1,
          };
          updatedItems[existingCartItemIdx] = updatedItem;
        } else {
          updatedItems.splice(existingCartItemIdx, 1);
        }
      }

      return { ...state, items: updatedItems };
    }
    case 'CLEAR_CART': {
      return { ...state, items: [] };
    }
    default:
      return state;
  }
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCart] = useReducer(cartReducer, { items: [] });

  const cartContext = useMemo(
    () => ({
      items: cart.items,
      addItem: (item) => dispatchCart({ type: 'ADD_ITEM', item }),
      removeItem: (id) => dispatchCart({ type: 'REMOVE_ITEM', id }),
      clearCart: () => dispatchCart({ type: 'CLEAR_CART' }),
    }),
    [cart.items],
  );

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
