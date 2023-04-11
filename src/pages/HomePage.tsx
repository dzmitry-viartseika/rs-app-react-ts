import React, {KeyboardEvent, useEffect, useState} from 'react';
import CardList from '../components/Card/CardList';
import ICardItem from "../models/ICardItem";
import axios from 'axios'
import LoaderTemplate from "../components/Elements/Loader/LoaderTemplate";

function HomePage(): JSX.Element {
    const [cardItems, setCardItems] = useState<ICardItem[]>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [updatedText, setUpdatedText] = useState('');
    const [isLoader, setIsLoader ] = useState<boolean>(false);
    const [serverMessage, setServerMessage] = useState<string>('');

    useEffect( () => {
        setServerMessage('')
        const searchText = localStorage.getItem('searchText');
        if (searchText) {
            setUpdatedText(searchText);
        }
        setIsLoader(true)
        axios.get(searchText ? `https://rickandmortyapi.com/api/character?name=${searchText}` : 'https://rickandmortyapi.com/api//character/')
            .then(response => {
                setIsLoader(false)
                setCardItems(response.data.results)
            }).catch((err) => {
            setServerMessage(err.response.data.error)
            setIsLoader(false);
            setCardItems([])
        });
    }, [searchText])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setUpdatedText(event.target.value);
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') {
            setSearchText(updatedText);
            localStorage.setItem('searchText', updatedText);
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
            { serverMessage && <h6 className="title">
                { serverMessage }
            </h6> }
            <CardList items={cardItems} />
            { isLoader && <LoaderTemplate /> }
        </>
    )
}

export default HomePage;