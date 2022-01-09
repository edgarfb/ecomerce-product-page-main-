const initialState = {
  active: false,
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MENU":
      return { ...state, active: true };
    case "HIDE_MENU":
      return { ...state, active: false };
    default:
      return state;
  }
};
