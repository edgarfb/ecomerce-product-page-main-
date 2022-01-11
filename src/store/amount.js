const initialState = {
  amount: 0,
  isBtnActived: false,
};
export const amountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MINUS":
      if (state.amount <= 1) {
        return { ...state, isBtnActived: false, amount: 0 };
      } else {
        return { ...state, isBtnActived: true, amount: state.amount - 1 };
      }
    case "PLUS":
      return { ...state, amount: state.amount + 1, isBtnActived: true };

    default:
      return state;
  }
};
export const getAmount = (state) => state.amount;
