import React, { useEffect, useState} from 'react';
import SearchComponent from "../components/Elements/Search/SearchComponent";
import CardList from '../components/Card/CardList';
import ICardItem from "../models/ICardItem";
import axios from 'axios'
import LoaderTemplate from "../components/Elements/Loader/LoaderTemplate";

function HomePage(): JSX.Element {
    const [cardItems, setCardItems] = useState<ICardItem[]>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [isLoader, setIsLoader ] = useState<boolean>(false);
    const [serverMessage, setServerMessage] = useState<string>('');

    useEffect( () => {
        setServerMessage('')
        const searchText = localStorage.getItem('searchText');
        if (searchText) {
            setSearchText(searchText);
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

    const handleCallback = (data: string): void => {
        setSearchText(data);
        localStorage.setItem('searchText', data);
    }


    return (
        <>
            <SearchComponent searchText={searchText} handleEvent={handleCallback}/>
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