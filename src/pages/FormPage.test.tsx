import {render, screen} from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Provider } from 'react-redux';
import FormPage from './FormPage';
import { store } from '../store';


describe('FormPage', () => {
    it('renders page', () => {
        render(
            <Provider store={store}>
                <FormPage />
            </Provider>
        );
        const element = screen.getByTestId('pageTitle');
        expect(element).toBeTruthy();
    });
});