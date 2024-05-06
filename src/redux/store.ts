import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cart.slice";
import productsReducer from "./products/products.slice";
import logger from "redux-logger";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
   reducer: {
      cart: cartReducer,
      products: productsReducer
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
   }).concat(logger)
})



type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;