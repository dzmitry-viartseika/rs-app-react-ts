import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '../../../utils/test-utils';
import HomePage from '../../../pages/HomePage';

describe('HomePage.tsx', () => {
    it('should be visible page title', () => {
        render(<HomePage />);
        expect(screen.queryByTestId('pageTitle')).toBeInTheDocument();
    });
});