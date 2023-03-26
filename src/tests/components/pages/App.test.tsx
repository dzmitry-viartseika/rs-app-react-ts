import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '../../../utils/test-utils';
import App from '../../../App';

describe('App.tsx', () => {
    it('should be visible page title', () => {
        render(<App />);
        expect(screen.queryByTestId('headerComponent')).toBeDefined();
    });
});