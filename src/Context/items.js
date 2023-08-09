const data = JSON.parse(localStorage.getItem("items") || "[]");

export const reItems = (state = data, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // yangi item newItem ga o'zlashtiramiz
      const newItem = action.payload;

      // yangi item id si
      const id = newItem.id;

      // yangi item quantity sini 1 ga tenglaymiz
      newItem.quantity = 1;

      // yangi item id si oldin bor yoki yo'qligini tekshiramiz
      const find = state.find((item) => item.id === id);

      // eski array ga yangi item ni qo'shamiz
      const items = [...state, newItem];

      // eski array ni map qilib yangi item id si oldin bor bo'lsa quantity sini 1 ga oshiramiz
      const newData = state.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );

      // yangi array ni localStorage ga saqlab qo'yamiz
      localStorage.setItem("items", JSON.stringify(find ? newData : items));

      // yangi array ni return qilib qaytaramiz
      return find ? newData : items;

    case "INC_ITEM":
      const inc = state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });

      localStorage.setItem("items", JSON.stringify(inc));
      return inc;

    case "DEC_ITEM":
      const dec = state.map((item) => {
        if (item.id === action.payload) {
          const qty = item.quantity <= 1 ? 1 : item.quantity - 1;
          return { ...item, quantity: qty };
        } else {
          return item;
        }
      });

      localStorage.setItem("items", JSON.stringify(dec));
      return dec;

    case "DELETE_ITEM":
      const filter = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("items", JSON.stringify(filter));
      return filter;

    case "CLEAR_CART":
      localStorage.removeItem("items");
      return [];

    default:
      // eski array ni return qilib qaytaramiz
      return state;
  }
};

export const acAddItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const acIncItem = (id) => ({ type: "INC_ITEM", payload: id });
export const acDecItem = (id) => ({ type: "DEC_ITEM", payload: id });
export const acDeleteItem = (id) => ({ type: "DELETE_ITEM", payload: id });
export const acClearCart = () => ({ type: "CLEAR_CART" });
