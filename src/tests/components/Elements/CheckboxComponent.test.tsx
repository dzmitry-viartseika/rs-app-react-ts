import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import CheckboxComponent from "../../../components/Elements/CheckboxComponent/CheckboxComponent";

describe('CheckBoxComponent.tsx', () => {
    const LABEL_TEXT = 'Label text';
    it('should be visible content according to the props', () => {
        const { getByText } = render(<CheckboxComponent checked={true} label={LABEL_TEXT} />);
        const label = getByText(LABEL_TEXT);
        expect(label).toBeInTheDocument();
    });

    it('should have a disabled attribute when the button is disabled', () => {
        const { getByRole } = render(<CheckboxComponent checked={true} disabled={true} label={LABEL_TEXT} />);
        const checkboxComponent = getByRole('checkbox');
        expect(checkboxComponent).toHaveAttribute('disabled');
    });

    it('should have a errorMessage', () => {
        const ERROR_MESSAGE = 'Error message'
        const { getByText } = render(<CheckboxComponent checked={true} disabled={true} label={LABEL_TEXT} errorMessage={ERROR_MESSAGE} />);
        const errorText = getByText(ERROR_MESSAGE);
        expect(errorText).toBeInTheDocument();
    });
});