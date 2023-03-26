import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '../../../utils/test-utils';
import FormItem from "../../../components/Form/FormItem";

describe('FormPage.tsx', () => {
    it('should be visible page title', () => {
        const item = {
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
        render(<FormItem item={item} key={item.id}/>);
        expect(screen.queryByTestId('pageTitle')).toBeInTheDocument();
    });
});