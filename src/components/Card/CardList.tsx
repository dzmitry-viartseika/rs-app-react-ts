import React, { Component } from 'react';
import CardItem from './CardItem';
import IState from '../../models/IState';
import ICardItem from '../../models/ICardItem';

type MyProps = {
    cardList: ICardItem[],
};

class CardList extends Component<MyProps, IState> {
    render() {
        const { cardList } = this.props;
        return (
            <div className="grid gap-x-8 gap-y-4 grid-cols-5">
                { cardList.map((card: ICardItem) => {
                    return <CardItem card={card} key={card.id} />
                })}
            </div>
        );
    }
}

export default CardList;