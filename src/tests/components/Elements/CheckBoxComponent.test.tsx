import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckboxComponent from "../../../components/Elements/CheckboxComponent/CheckboxComponent";

describe('Checkbox', () => {
    it('renders correctly', () => {
        const handleChange = jest.fn();
        const { getByLabelText } = render(
            <CheckboxComponent label="Test Checkbox" onChange={handleChange} checked={true}/>
        );
        const checkbox = getByLabelText('Test Checkbox');
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
    });

    it('handles click events correctly', () => {
        const handleChange = jest.fn();
        const { getByLabelText } = render(
            <CheckboxComponent label="Test Checkbox" onChange={handleChange} checked={true}/>
        );
        const checkbox = getByLabelText('Test Checkbox');
        fireEvent.click(checkbox);
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(checkbox).toBeChecked();
    });
});