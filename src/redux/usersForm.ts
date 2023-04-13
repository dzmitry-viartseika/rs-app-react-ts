import { createSlice } from '@reduxjs/toolkit';
import IFormItem from "../models/IFormItem";

export interface IState {
    userList: IFormItem[];
}

export const initialState = {
    userList: [],
} as IState

const usersFormSlice = createSlice({
    name: 'usersForm',
    initialState,
    reducers: {
       setUserList(state, action): void {
           state.userList.push(action.payload);
       },
    }
})

export const { setUserList } = usersFormSlice.actions;

export default usersFormSlice.reducer;