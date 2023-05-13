import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import ButtonComponent from "../../../components/Elements/ButtonComponent/ButtonComponent";

function onClose() {
    return //
}
describe('InputComponent.tsx', () => {
    it('should be visible content according to the props', () => {
        const { getByText } = render(<ButtonComponent type="button" buttonText={'Close'} onClick={onClose}/>);
        const component = getByText('Close');
        expect(document.body.contains(component)).toBe(true);
    });
});