import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '../../../utils/test-utils';
import FormPage from '../../../pages/FormPage';

describe('FormPage.tsx', () => {
    it('should be visible page title', () => {
        render(<FormPage />);
        expect(screen.queryByTestId('pageTitle')).toBeInTheDocument();
    });

    it('should be visible content according to the props', async () => {
        render(<FormPage />);
        expect(screen.queryByTestId('formText')).toBeInTheDocument();
    });

    it('Should shows validation errors when form is submitted with empty values', async () => {
        render(<FormPage />);

        const handleClickEvent = screen.getByRole('button', { name: /Submit Data/i });

        fireEvent.click(handleClickEvent);

        await screen.findAllByText(/The field is required/i);
    });

    it('Should submits with inValid FirstName', async () => {
        render(<FormPage />);
        const handleClickEvent = screen.getByRole('button', { name: /Submit Data/i });

        const firstNameInput = screen.getByLabelText(/^First Name/i);
        console.log('firstNameInput', firstNameInput)
        fireEvent.input(firstNameInput, { target: { value: 'ww' } });
        fireEvent.click(handleClickEvent);
        await screen.findByText('Enter First letter UpperCase');
    });

    it('Should submits with inValid LastName', async () => {
        render(<FormPage />);
        const handleClickEvent = screen.getByRole('button', { name: /Submit Data/i });

        const lastNameInput = screen.getByLabelText(/^Last Name/i);
        fireEvent.input(lastNameInput, { target: { value: 'la' } });
        fireEvent.click(handleClickEvent);
        await screen.findByText('Enter First letter UpperCase');
    });

    it('Should submits with all fields', async () => {
        render(<FormPage />);
        const handleClickEvent = screen.getByRole('button', { name: /Submit Data/i });
        const file = new File([''], 'avatar.png', { type: 'image/png' });

        const firstNameInput = screen.getByLabelText(/^First Name/i);
        const lastNameInput = screen.getByLabelText(/^Last Name/i);
        const zipCodeInput = screen.getByLabelText(/^Zip Code/i);
        const deliveryDateInput = screen.getByLabelText(/^Delivery Date/i);
        const birthDayInput = screen.getByLabelText(/^Birthday/i);
        const countryInput = screen.getByLabelText(/^Select Country/i);
        const stateInput = screen.getByLabelText(/^Select State/i);
        const isAgreedWithPersonalDataInput = screen.getByLabelText(/^I consist to my personal data/i);
        const isReceivePromoInput = screen.getByLabelText(/^Receive Promo/i);
        const fileInput = screen.getByText(/^Profile Image/i);
        const selectedOptionGender = screen.getByRole('radio', { name: 'Male' });
        fireEvent.input(firstNameInput, { target: { value: 'Wer' } });
        fireEvent.input(lastNameInput, { target: { value: 'Test' } });
        fireEvent.input(zipCodeInput, { target: { value: '04-111' } });
        fireEvent.input(selectedOptionGender, { target: { value: 'Male' } });
        fireEvent.input(deliveryDateInput, { target: { value: '04-04-2022' } });
        fireEvent.input(birthDayInput, { target: { value: '04-04-1990' } });
        fireEvent.input(isAgreedWithPersonalDataInput, { target: { checked: true } });
        fireEvent.input(isReceivePromoInput, { target: { checked: true } });
        fireEvent.input(countryInput, { target: { value: 'Country1' } });
        fireEvent.input(stateInput, { target: { value: 'State1' } });
        fireEvent.input(fileInput, { target: { files: [file] } });

        fireEvent.click(handleClickEvent);
        (await screen.findAllByText('The field is required')).length === 0;
    });
});