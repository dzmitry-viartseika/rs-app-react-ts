import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import ModalCardComponent from "../../../../components/Modals/ModalCardComponent";


function onClose() {
    return //
}
describe('ModalCardComponent.tsx', () => {
    const card = {
            created: "2017-11-04T18:48:46.250Z",
            episode: ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2"],
            gender: 'Male',
            id: 343,
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            name: "Rick Sanchez",
            location: {
                name: "Citadel of Ricks",
                url: "https://rickandmortyapi.com/api/location/3",
            },
            origin: {
                name: "Citadel of Ricks",
                url: "https://rickandmortyapi.com/api/location/3",
            },
            species: "Human",
            status: "Alive",
            type: "",
            url: "https://rickandmortyapi.com/api/character/1",
        }
    it('should be visible Loader', () => {
        const { container } = render(<ModalCardComponent card={card} onClose={onClose}/>);
        expect(container).toBeInTheDocument();
    });
});