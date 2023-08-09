export const reSidebar = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return !state;

    default:
      return state;
  }
};

export const acSidebar = () => ({ type: "TOGGLE_SIDEBAR" });
