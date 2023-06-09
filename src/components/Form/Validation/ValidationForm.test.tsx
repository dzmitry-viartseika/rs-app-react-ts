import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import ValidationForm from "../../../components/Form/Validation/ValidationForm";

describe('FormPage.tsx', () => {
    it('should be visible content according to the props', () => {
        const props = {
            textError: 'Set up your field'
        }
        const { getByText } = render(<ValidationForm {...props} />);
        const textError = getByText(props.textError);
        expect(document.body.contains(textError)).toBe(true);
    });
});