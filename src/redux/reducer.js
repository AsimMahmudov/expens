const initalState = {
  money: 20000,
  expenses: 0,
};

export const Reducer = (state = initalState, action) => {
  switch (action.type) {
    case "TAKE_MONEY":
      return {
        ...state,
        money: state.money - action.payload,
      };
    case "GET_MONEY":
      return { ...state, expenses: state.expenses + action.payload };
    default:
      return state;
  }
};
