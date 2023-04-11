import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '../../../utils/test-utils';
import HomePage from '../../../pages/HomePage';
import axios from "axios";
import {waitFor} from "@testing-library/react";

describe('HomePage.tsx', () => {
    it('should be visible page title', () => {
        render(<HomePage />);
        expect(screen.queryByTestId('pageTitle')).toBeInTheDocument();
    });

    test('fetches data and renders correctly', async () => {
        // Mock Axios response
        const mockedResponse = {
            data: {
                created: "2017-11-04T18:50:21.651Z",
                episode: ['episode1'],
                gender: 'Male',
                id: 23403043,
                image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                name: "Test Name",
                location: {
                    name: "Test Name",
                    url: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                },
                origin: {
                    name: "Test Name",
                    url: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                },
                species: "Human",
                status: "Alive",
                type: "",
                url: "string",
            }
        };
        (axios.get as jest.Mock).mockReturnValue(mockedResponse);

        render(<HomePage />)

        await waitFor(() => screen.getByText('Test Name'));
        expect(screen.getByText('Test Name')).toBeInTheDocument();
        expect(screen.getByText('Alive')).toBeInTheDocument();
    });
});