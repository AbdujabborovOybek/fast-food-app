export const reSearch = (state = "", action) => {
  switch (action.type) {
    case "SEARCH":
      return action.payload;
    default:
      return state;
  }
};

export const acSearch = (search) => ({ type: "SEARCH", payload: search });
