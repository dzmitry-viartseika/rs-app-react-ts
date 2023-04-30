import { describe, expect, it } from 'vitest';
import { render, screen } from '../../utils/test-utils';
import NotFound from '../../pages/NotFound';
import React from 'react';

describe('NotFound.tsx', () => {
    it('should be visible page title', () => {
        render(<NotFound />);
        expect(screen.queryByTestId('pageTitle')).toBeInTheDocument();
    });
});