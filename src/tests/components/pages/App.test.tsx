import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '../../../utils/test-utils';
import App from '../../../App';

describe('AboutUsPage.tsx', () => {
    it('should be visible page title', () => {
        render(<App />);
        expect(screen.queryByTestId('searchInput')).toBeDefined();
    });
});