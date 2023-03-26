import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '../../../utils/test-utils';
import FormPage from '../../../pages/FormPage';

describe('FormPage.tsx', () => {
    it('should be visible page title', () => {
        render(<FormPage />);
        expect(screen.queryByTestId('pageTitle')).toBeInTheDocument();
    });

    it('should be visible content according to the props', () => {
        render(<FormPage />);
        expect(screen.queryByTestId('formText')).toBeInTheDocument();
    });
});