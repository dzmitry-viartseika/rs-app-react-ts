import React, { useEffect, useState} from 'react';
import SearchComponent from "../components/Elements/Search/SearchComponent";
import cardList from '../constants/cardList';
import CardList from '../components/Card/CardList';
import ICardItem from "../models/ICardItem";


function HomePage(): JSX.Element {
    const [cardItems, setCardItems] = useState<ICardItem[]>([]);
    const [searchText, setSearchText] = useState<string>('');

    useEffect(() => {
        setCardItems(cardList)
        const searchText = localStorage.getItem('searchText');
        if (searchText) {
            setSearchText(searchText);
        }
    }, [])

    const handleCallback = (data: string): void => {
        setSearchText(data);
        localStorage.setItem('searchText', data);
    }

    const filteredItems = cardItems.filter(item => item.title.includes(searchText));


    return (
        <>
            <SearchComponent searchText={searchText} handleEvent={handleCallback}/>
            <br/>
            <h1 className="title mb-6" data-testid="pageTitle">HOME PAGE</h1>
            <CardList items={filteredItems}/>
        </>
    )
}

export default HomePage;