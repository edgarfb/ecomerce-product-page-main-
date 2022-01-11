const initialState = {
  active: false,
  item: {},
  amount: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_CART":
      return { ...state, active: !state.active };
    case "ADD_ITEM":
      return { ...state, item: action.payload };
    default:
      return state;
  }
};

// TODO - add reducer for cart items
