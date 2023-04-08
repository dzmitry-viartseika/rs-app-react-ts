import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import FormItem from "../../../components/Form/FormItem";

describe('FormItem.tsx', () => {
    it('should be visible content according to the props', () => {
        const item = {
                id: '1',
                firstName: 'Dzmitry',
                zipCode: '123',
                lastName: 'Test',
                deliveryDate: '23-10-2023',
                birthDay: '23-10-1990',
                selectedOptionCountry: 'Option 1',
                selectedOptionState: 'State 1',
                isAgreedWithPersonalData: true,
                isReceivePromo: true,
                selectedOptionGender: 'Male',
            }
        const { getByText } = render(<FormItem item={item} />);
        const firstName = getByText(item.firstName);
        const lastName = getByText(item.lastName);
        const zipCode = getByText(item.zipCode);
        const deliveryDate = getByText(item.deliveryDate);
        const birthDay = getByText(item.birthDay);
        const country = getByText(item.selectedOptionCountry);
        const state = getByText(item.selectedOptionState);
        const gender = getByText(item.selectedOptionGender);

        expect(firstName).toBeInTheDocument();
        expect(lastName).toBeInTheDocument();
        expect(zipCode).toBeInTheDocument();
        expect(deliveryDate).toBeInTheDocument();
        expect(birthDay).toBeInTheDocument();
        expect(country).toBeInTheDocument();
        expect(state).toBeInTheDocument();
        expect(gender).toBeInTheDocument();
    });
});