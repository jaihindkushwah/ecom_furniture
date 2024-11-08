import {configureStore} from '@reduxjs/toolkit';
import {cartReducer} from './cartSlice';
import wishItemReducer from './wishItemSlice';
import chatReducer from './chatSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishItem: wishItemReducer,
    chat: chatReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
