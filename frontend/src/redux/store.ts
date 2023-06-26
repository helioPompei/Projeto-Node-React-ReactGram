import { configureStore } from "@reduxjs/toolkit";

// Import Reducers
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
