import {createSelector, createSlice} from '@reduxjs/toolkit';
import {ICartItemProps} from './cartSlice';
import {RootState} from './store';

const initialState: ICartItemProps[] = [];

const wishItemSlice = createSlice({
  name: 'wishItem',
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      state.push(action.payload);
    },
    removeFromWishList: (state, action) => {
      state = state.filter(item => item.id !== action.payload.id);
    },
  },
});

export const {addToWishList, removeFromWishList} = wishItemSlice.actions;

export default wishItemSlice.reducer;

export const getWishListState = createSelector(
  (state: RootState) => state.wishItem,
  wishItemState => ({
    ...wishItemState,
  }),
);
