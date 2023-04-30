import React, {KeyboardEvent, useEffect, useState} from 'react';
import CardList from '../components/Card/CardList';
import {useDispatch, useSelector} from "react-redux";
import {fetchCharacters } from '../store/searchResultsSlice';
import {setQuery } from '../store/searchSlice';
import ICardItem from "../models/ICardItem";
import {RootState} from "../store/store";
import {AnyAction, ThunkDispatch} from "@reduxjs/toolkit";

export interface IState {
    searchResults: {
        cards: ICardItem[],
        loading: boolean,
        error: string,
    };
}

function HomePage(): JSX.Element {
    const query = useSelector((state: RootState) => state.search.searchQuery);
    const cardsData = useSelector((state: RootState) => state.searchResults.cards);
    const page = useSelector((state: RootState) => state.searchResults.page);
    const isLoading = useSelector((state: RootState) => state.searchResults.isLoading);
    const error = useSelector((state: RootState) => state.searchResults.error);
    const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
    const [updatedText, setUpdatedText] = useState('');

    useEffect(() => {
        dispatch(fetchCharacters({ page, query }));
    }, [query, page, dispatch]);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setUpdatedText(event.target.value);
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') {
            dispatch(setQuery(updatedText))
        }
    }

    return (
        <>
            <input type="text"
                   data-cy="input-search"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Search"
                   required
                   value={updatedText}
                   onChange={handleChange}
                   onKeyDown={handleKeyDown}
            />
            <br/>
            <h1 className="title mb-6" data-testid="pageTitle">HOME PAGE</h1>
            {!error && !isLoading && cardsData.length ? <CardList data-cy="card-list" items={cardsData} /> : <div data-cy="card-list">CardList is empty</div>}
        </>
    )
}

export default HomePage;