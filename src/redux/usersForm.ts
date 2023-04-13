import { createSlice } from '@reduxjs/toolkit';
import IFormItem from "../models/IFormItem";

export interface IState {
    userList: IFormItem[];
}

const usersFormSlice = createSlice({
    name: 'usersForm',
    initialState: {
        userList: [],
    } as IState,
    reducers: {
       setUserList(state, action): void {
           const newUser = action.payload;
           state.userList.push(newUser);
       },
    }
})

export const { setUserList } = usersFormSlice.actions;

export default usersFormSlice.reducer;