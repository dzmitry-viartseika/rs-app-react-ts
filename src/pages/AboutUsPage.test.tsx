import {render, screen} from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AboutUsPage from './AboutUsPage';

describe('AboutUsPage', () => {
    it('renders page', () => {
        render(
            <AboutUsPage />
        );

        const element = screen.getByTestId('pageTitle');
        expect(element).toBeTruthy();
    });
});