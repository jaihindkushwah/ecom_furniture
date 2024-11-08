import {createSelector, createSlice} from '@reduxjs/toolkit';
import {RootState} from './store';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {},
  reducers: {},
});

export const {} = chatSlice.actions;
export default chatSlice.reducer;

export const getChatState = createSelector(
  (state: RootState) => state.chat,
  chatState => ({
    ...chatState,
  }),
);
