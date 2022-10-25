import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/user";
import themeReducer from "./features/user/theme";

import counterReducer from "./features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    counter: counterReducer,
  },
});
