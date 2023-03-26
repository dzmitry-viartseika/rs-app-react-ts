import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import FormItem from "../../../components/Form/FormItem";

describe('FormPage.tsx', () => {
    it('should be visible content according to the props', () => {
        const props = {
            item: {
                id: 1,
                firstName: 'Dzmitry',
                lastName: 'Viartseika',
                zipCode: '04-170',
                deliveryDate: '10-10-2023',
                birthDay: '23-10-1990',
                country: 'Poland',
                state: 'Warsaw',
                acceptPersonalData: true,
                gender: 'Male',
                isReceivePromo: true,
                profileImage: null,
            }
        }
        // @ts-ignore
        const { getByText } = render(<FormItem {...props} />);
        const firstName = getByText(props.item.firstName);
        const lastName = getByText(props.item.lastName);
        const zipCode = getByText(props.item.zipCode);
        const deliveryDate = getByText(props.item.deliveryDate);
        const birthDay = getByText(props.item.birthDay);
        const country = getByText(props.item.country);
        const state = getByText(props.item.country);
        const gender = getByText(props.item.gender);

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