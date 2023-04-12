import { createSlice } from '@reduxjs/toolkit';

const usersFormSlice = createSlice({
    name: 'usersForm',
    initialState: {
        userList: [],
    },
    reducers: {
       setUserList(state, action) {
           state.userList.push(action.payload)
       },
    }
})

export const { setUserList } = usersFormSlice.actions;

export default usersFormSlice.reducer;