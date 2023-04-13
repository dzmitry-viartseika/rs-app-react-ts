import React, {KeyboardEvent, useEffect, useState} from 'react';
import CardList from '../components/Card/CardList';
import LoaderTemplate from "../components/Elements/Loader/LoaderTemplate";
import {useDispatch, useSelector} from "react-redux";
import {setSearchText, fetchCharacters } from '../redux/characterSlice';
import ICardItem from "../models/ICardItem";

export interface IState {
    characters: {
        characterList: ICardItem[],
        searchText: string,
        loading: boolean,
        error: string,
    };
}

function HomePage(): JSX.Element {
    const dispatch = useDispatch();
    const cardItems = useSelector((state: IState) => state.characters.characterList)
    const searchText = useSelector((state: IState) => state.characters.searchText)
    const [updatedText, setUpdatedText] = useState('');
    const isLoader = useSelector((state: IState) => state.characters.loading);
    const error = useSelector((state: IState) => state.characters.error);

    useEffect( () => {
        dispatch(fetchCharacters(searchText));
    }, [searchText])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setUpdatedText(event.target.value);
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') {
            dispatch(setSearchText(updatedText))
        }
    }

    return (
        <>
            <input type="text" id="simple-search"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Search"
                   required
                   value={updatedText}
                   onChange={handleChange}
                   onKeyDown={handleKeyDown}
            />
            <br/>
            <h1 className="title mb-6" data-testid="pageTitle">HOME PAGE</h1>
            { error && <h6 className="title">
                { error }
            </h6> }
            <CardList items={cardItems} />
            { isLoader && <LoaderTemplate /> }
        </>
    )
}

export default HomePage;