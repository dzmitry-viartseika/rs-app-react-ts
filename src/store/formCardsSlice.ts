import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IFormItem from "../models/IFormItem";

export interface IFormCardsState {
  userList: IFormItem[];
}

export const initialState: IFormCardsState = {
  userList: [],
};

export const formCardsSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    setFormCards: (state, action: PayloadAction<IFormItem>) => {
      state.userList = [...state.userList, action.payload];
    },
  },
});

export const { setFormCards } = formCardsSlice.actions;
