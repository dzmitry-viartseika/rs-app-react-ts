import { createSlice } from '@reduxjs/toolkit';

const usersFormSlice = createSlice({
    name: 'usersForm',
    initialState: {
        userList: [],
    },
    reducers: {
       setUserList(state, action): void {
           const newUser = action.payload;
           state.userList.push(newUser);
       },
    }
})

export const { setUserList } = usersFormSlice.actions;

export default usersFormSlice.reducer;