import React, { Component } from 'react';
import SearchComponent from "../components/Elements/Search/SearchComponent";
import cardList from '../constants/cardList';
import CardList from '../components/Card/CardList';

class HomePage extends Component {

    state = {
        cardList: cardList,
        searchText: '',
    }

    handleCallback = (data: string): void => {
        this.setState({ searchText: data })
        localStorage.setItem('searchText', data);
    }

    componentDidMount() {
        const searchText = localStorage.getItem('searchText');
        if (searchText) {
            this.setState({ searchText: searchText })
        }
    }

    render() {
        const { cardList, searchText } = this.state;
        const filteredItems = cardList.filter(item => item.title.includes(searchText));

        return (
            <>
                <SearchComponent searchText={searchText} handleEvent={this.handleCallback}/>
                <br/>
                <h1 className="title mb-6" data-testid="pageTitle">HOME PAGE</h1>
                <CardList cardList={filteredItems}/>
            </>
        );
    }
}

export default HomePage;