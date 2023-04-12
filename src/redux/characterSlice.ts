import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://rickandmortyapi.com/api//character/';

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

export const { fetchCharacterListRequest, fetchCharacterListSuccess, fetchCharacterListFailure, getAllReducers, setCharacterList, setSearchText} = characterSlice.actions;

export const fetchCharacters = (searchText?: string) => async (dispatch: Dispatch<unknown>) => {
    dispatch(fetchCharacterListRequest());
    try {
        const { data } = await axios.get(`${API_BASE_URL}?name=${searchText}`)
        dispatch(fetchCharacterListSuccess(data.results));
    } catch (err: unknown) {
        dispatch(fetchCharacterListFailure((err as Error).message));
        dispatch(fetchCharacterListSuccess([]));
    }
};

export default characterSlice.reducer;