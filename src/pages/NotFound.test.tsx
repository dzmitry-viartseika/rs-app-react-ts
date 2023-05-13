import {render, screen} from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NotFound from './NotFound';

describe('AboutUsPage', () => {
    it('renders page', () => {
        render(
            <NotFound />
        )
        const element = screen.getByTestId('pageTitle');
        expect(element).toBeTruthy();
    });
});