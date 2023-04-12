import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "./characterSlice";
import usersForm from "./usersForm";
import thunkMiddleware from "redux-thunk";

const store = configureStore({
    reducer: {
        characters: characterSlice,
        userForm: usersForm,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
})

export default store;