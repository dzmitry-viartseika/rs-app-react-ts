import React from 'react';
import ICardItem from '../../models/ICardItem';
import CardItem from "./CardItem";

type MyProps = {
    items: ICardItem[],
};

function CardList({ items }: MyProps): JSX.Element {
    return (
        <div className="grid gap-x-8 gap-y-4 grid-cols-5">
            { items.map((card: ICardItem) => {
                return <CardItem card={card} key={card.id} />
            })}
        </div>
    )
}

export default CardList;