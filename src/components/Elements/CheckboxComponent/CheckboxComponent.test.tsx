import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import CheckboxComponent from "../../../components/Elements/CheckboxComponent/CheckboxComponent";

describe('CheckBoxComponent.tsx', () => {
    const LABEL_TEXT = 'Label text';
    it('should be visible content according to the props', () => {
        const { getByText } = render(<CheckboxComponent id="id1" checked={true} label={LABEL_TEXT} />);
        const label = getByText(LABEL_TEXT);
        expect(document.body.contains(label)).toBe(true);
    });

    it('should have a disabled attribute when the button is disabled', () => {
        const { getByRole } = render(<CheckboxComponent id="id2" checked={true} disabled={true} label={LABEL_TEXT} />);
        const checkboxComponent = getByRole('checkbox');
        expect(checkboxComponent.hasAttribute('disabled')).toBe(true)
    });
});