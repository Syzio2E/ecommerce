import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalamount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    if (!action.item || !action.item.price)  {
      return state;
    }
    const updatedTotalAmount =
      state.totalamount + action.item.price * action.item.amount;
    const existingCartITemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartITemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartITemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalamount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
      const existingCartITemIndex = state.items.findIndex(
          (item) => item.id === action.id
          );
          const existingCartItem = state.items[existingCartITemIndex];
          if (!existingCartItem) {
            return state;
          }
          const exisingItem = state.items[existingCartITemIndex]
          const updatedTotalAmount = state.totalamount-exisingItem.price
          let updatedItems;
          if(exisingItem.amount === 1){
            updatedItems = state.items.filter(item=>item.id!== action.id)
          } else {
            const updatedItem = {...exisingItem,amount: exisingItem.amount - 1}
            updatedItems = [...state.items]
            updatedItems[existingCartITemIndex] = updatedItem
          }
          return {
            items: updatedItems,
            totalamount: updatedTotalAmount
          }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalamount: cartState.totalamount,
    addItem: addItemHandler, // changed from addItems
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
