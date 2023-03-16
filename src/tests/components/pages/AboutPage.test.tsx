import { describe, expect, it } from 'vitest';
import { render, screen } from '../../../utils/test-utils';
import AboutUsPage from '../../../pages/AboutUsPage';
import React from 'react';

describe('AboutUsPage.tsx', () => {
    it('should be visible page title', () => {
        render(<AboutUsPage />);
        expect(screen.queryByTestId('pageTitle')).toBeInTheDocument();
    });
});