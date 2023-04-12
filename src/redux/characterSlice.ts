import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const characterSlice = createSlice({
    name: 'character',
    initialState: {
        characterList: [],
        searchText: '',
        loading: false,
        error: null,
    },
    reducers: {
        fetchCharacterListRequest(state) {
            state.loading = true;
            state.error = null;
        } ,
        fetchCharacterListSuccess: (state, action) => {
            console.log('action.payload', action.payload)
            state.loading = false;
            state.characterList = action.payload;
        },
        fetchCharacterListFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
       getAllReducers(state, action) {
           state.characterList = action.payload.characterList;
       },
       setCharacterList(state, action) {
           state.characterList = action.payload;
       },
       setSearchText(state, action) {
           state.searchText = action.payload
       },
    }
})

export const {fetchCharacterListRequest, fetchCharacterListSuccess, fetchCharacterListFailure, getAllReducers, setCharacterList, setSearchText} = characterSlice.actions;

const API_BASE_URL = 'https://rickandmortyapi.com/api//character/';

const api = axios.create({
    baseURL: API_BASE_URL
});
export const fetchUsers = (searchText?: string) => async (dispatch: any) => {
    dispatch(fetchCharacterListRequest());
    try {
        console.log('fetchUsers')
        const { data } = await axios.get(`${API_BASE_URL}?name=${searchText}`)
        console.log('response response response', data.results)
        dispatch(fetchCharacterListSuccess(data.results));
    } catch (err: any) {
        dispatch(fetchCharacterListFailure(err.message));
        dispatch(fetchCharacterListSuccess([]));
    }
};

export default characterSlice.reducer;