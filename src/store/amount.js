const initialState = {
  amount: 0,
};
export const amountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MINUS":
      if (state.amount === 0) {
        return { ...state, amount: 0 };
      } else {
        return { ...state, amount: state.amount - 1 };
      }
    case "PLUS":
      return { ...state, amount: state.amount + 1 };

    default:
      return state;
  }
};
export const getAmount = (state) => state.amount;
