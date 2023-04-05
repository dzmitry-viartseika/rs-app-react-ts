import React from 'react';
import ButtonComponent from "../Elements/ButtonComponent/ButtonComponent";

type MyProp = {
    card: {
        created: string,
        episode: string[],
        gender: string,
        id: number,
        image: string,
        name: string,
        location: {
            name: string,
            url: string,
        },
        origin: {
            name: string,
            url: string,
        },
        species: string,
        status: string,
        type: string,
        url: string,
    },
    onClose: () => void;
}
function ModalCardComponent(props: MyProp) {
    return (
        <div className="fixed z-1 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
            >
                <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                    onClick={props.onClose}
                >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div
                    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <div className="flex justify-between items-center">
                                    <h3
                                        className="text-2xl font-medium text-gray-900"
                                    >
                                        Full information
                                    </h3>
                                    <ButtonComponent
                                        type="button"
                                        onClick={props.onClose}
                                        buttonText={'x'}
                                    />
                                </div>
                                <div className="py-4 flex justify-center flex-col items-center">
                                    <div className="mb-2">
                                        <img src={props.card.image} alt=""/>
                                    </div>
                                    <p className="mb-2 text-sm text-gray-500">
                                        <span className="font-bold pr-1">Name:</span> { props.card.name }
                                    </p>
                                    <p className="mb-2 text-sm text-gray-500">
                                        <span className="font-bold pr-1">Created:</span> { props.card.created }
                                    </p>
                                    <p className="mb-2 text-sm text-gray-500">
                                        <span className="font-bold pr-1">Gender:</span> { props.card.gender }
                                    </p>
                                    <p className="mb-2 text-sm text-gray-500">
                                        <span className="font-bold pr-1">Status:</span>{ props.card.status }
                                    </p>
                                    <p className="mb-2 text-sm text-gray-500">
                                        <span className="font-bold pr-1">Species:</span> { props.card.species }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <ButtonComponent
                            type="button"
                            onClick={props.onClose}
                            buttonText={'Close'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalCardComponent;