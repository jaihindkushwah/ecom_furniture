import {createSelector, createSlice} from '@reduxjs/toolkit';
import {RootState} from './store';

export interface ICartItemProps {
  id: number;
  title: string;
  image: string;
  quantity: number;
  price: number;
  currency: string;
}
export interface ICartState {
  items: ICartItemProps[];
  total: number;
}

const initialState: ICartState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    bulkAddToCart: (state, action: {payload: ICartItemProps[]}) => {
      state.total += action.payload.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
      state.items = [...state.items, ...action.payload];
    },
    addToCart: (state, action: {payload: ICartItemProps}) => {
      state.total += action.payload.price;
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      state.total -= action.payload.price * action.payload.quantity;
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    incrementCartItemQuantity: (state, action) => {
      state.total += action.payload.price;
      state.items = state.items.map(item => {
        if (item.id === action.payload.id) {
          return {...item, quantity: item.quantity + 1};
        }
        return item;
      });
    },
    decrementCartItemQuantity: (state, action) => {
      state.total -= action.payload.price;
      state.items = state.items.map(item => {
        if (item.id === action.payload.id) {
          return {...item, quantity: item.quantity - 1};
        }
        return item;
      });
    },
    clearCart: state => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const {
  addToCart,
  clearCart,
  removeFromCart,
  bulkAddToCart,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export const getCartState = createSelector(
  (state: RootState) => state.cart,
  cartState => ({
    ...cartState,
  }),
);
