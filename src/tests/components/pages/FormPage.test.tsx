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

    it('Should submits with all fields', async () => {
        render(<FormPage />);
        const file = new File([''], 'avatar.png', { type: 'image/png' });

        const firstNameInput = screen.getByLabelText(/^First Name/i);
        const lastNameInput = screen.getByLabelText(/^lastName/i);
        const zipCodeInput = screen.getByLabelText(/^zipCode/i);
        const deliveryDateInput = screen.getByLabelText(/^deliveryDate/i);
        const birthDayInput = screen.getByLabelText(/^birthday/i);
        const countryInput = screen.getByLabelText(/^Select Country/i);
        const genderInput = screen.getByLabelText(/^Select Gender/i);
        const stateInput = screen.getByLabelText(/^Select State/i);
        const isAgreedWithPersonalDataInput = screen.getByLabelText(/^I consist to my personal data/i);
        const isReceivePromoInput = screen.getByLabelText(/^Receive Promo/i);
        const fileInput = screen.getByText(/^Profile Image/i);
        fireEvent.input(firstNameInput, { target: { value: 'Wer' } });
        fireEvent.input(lastNameInput, { target: { value: 'Test' } });
        fireEvent.input(zipCodeInput, { target: { value: '04-111' } });
        fireEvent.input(deliveryDateInput, { target: { value: '04-04-2022' } });
        fireEvent.input(birthDayInput, { target: { value: '04-04-1990' } });
        fireEvent.input(isAgreedWithPersonalDataInput, { target: { checked: true } });
        fireEvent.input(isReceivePromoInput, { target: { checked: true } });
        fireEvent.input(countryInput, { target: { value: 'Country1' } });
        fireEvent.input(stateInput, { target: { value: 'State1' } });
        fireEvent.input(genderInput, { target: { value: 'Male' } });
        fireEvent.input(fileInput, { target: { files: [file] } });
    });
});