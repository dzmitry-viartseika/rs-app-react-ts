import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import axios from 'axios';
import ICardItem from "../models/ICardItem";

const API_BASE_URL = 'https://rickandmortyapi.com/api//character/';

export interface IState {
    characterList: ICardItem[];
    searchText: string;
    loading: boolean;
    error: string | null;
}

export const initialState = {
    characterList: [],
    searchText: '',
    loading: false,
    error: null,
} as IState

const characterSlice = createSlice({
    name: 'character',
    initialState,
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
        setSearchText(state, action) {
           state.searchText = action.payload
        },
    }
})

export const { fetchCharacterListRequest, fetchCharacterListSuccess, fetchCharacterListFailure, setSearchText} = characterSlice.actions;

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