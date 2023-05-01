import React from 'react';
import { describe, expect, it } from 'vitest';
import {render, screen} from '@testing-library/react';
import FormItem from "../../components/Form/FormItem";

describe('FormItem.tsx', () => {
    const file = new File(['hello'], 'hello.png', {type: 'image/png'})

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

        expect(document.body.contains(firstName)).toBe(true);
        expect(document.body.contains(lastName)).toBe(true);
        expect(document.body.contains(zipCode)).toBe(true);
        expect(document.body.contains(deliveryDate)).toBe(true);
        expect(document.body.contains(birthDay)).toBe(true);
        expect(document.body.contains(country)).toBe(true);
        expect(document.body.contains(state)).toBe(true);
        expect(document.body.contains(gender)).toBe(true);
    });

    it('should be visible firstName', () => {
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

        render(<FormItem item={item} />);

        const element = screen.getByTestId('firstName');
        expect(element).toBeTruthy();
    });

    it('should be visible birthDay', () => {
        URL.createObjectURL = () => 'mock-url';

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
            selectedFile: file,
        }

        render(<FormItem item={item} />);

        const element = screen.getByTestId('formItemFileImage');
        expect(element).toBeTruthy();
    });
});