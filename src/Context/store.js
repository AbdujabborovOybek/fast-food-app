import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { reItems } from "./items";
import { reSearch } from "./search";
import { reSidebar } from "./sidebar";

export const store = configureStore({
  reducer: combineReducers({
    items: reItems,
    search: reSearch,
    sidebar: reSidebar,
  }),
});
