const initialState = {
  active: false,
  items: [],
  amount: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_CART":
      return { ...state, active: !state.active };
    default:
      return state;
  }
};

// TODO - add reducer for cart items
