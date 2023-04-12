import React, {useState} from 'react';
import ICardItem from '../../models/ICardItem';
import ModalCardContent from "../Modals/ModalCardComponent";
import ButtonComponent from "../Elements/ButtonComponent/ButtonComponent";

type MyProps = {
    card: ICardItem,
};

function CardItem(props: MyProps): JSX.Element {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const toggleModal = () => {
        // event.stopPropagation()
        setIsOpenModal(!isOpenModal);
    }

    return (
        <section
            data-testid="cardItem"
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img src={props.card.image} className="mb-6" alt="image"/>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ props.card.name }</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ props.card.gender }</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ props.card.status }</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ props.card.type }</p>
            <ButtonComponent
                type="button"
                onClick={toggleModal}
                buttonText={'Read more'}
            >
                Read more
            </ButtonComponent>
            { isOpenModal && <ModalCardContent card={props.card} onClose={toggleModal}/> }
        </section>
    )
}

export default CardItem;