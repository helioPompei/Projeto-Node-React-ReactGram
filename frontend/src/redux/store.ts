// Redux
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// Import Reducers
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import photoReducer from "./slices/photoSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    photo: photoReducer,
  },
});

// TypeScript use
export type RootState = ReturnType<typeof store.getState>; // Retorna o tipo do estado de store
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
