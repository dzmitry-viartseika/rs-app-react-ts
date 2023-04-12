import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import LoaderTemplate from "../../../components/Elements/Loader/LoaderTemplate";

describe('LoaderTemplate.tsx', () => {
    it('should be visible Loader', () => {
        const { container } = render(<LoaderTemplate />);
        expect(container).toBeInTheDocument();
    });
});