import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import InputComponent from "../../../components/Elements/InputComponent/InputComponent";

describe('InputComponent.tsx', () => {
    const LABEL_TEXT = 'Label text';
    it('should be visible content according to the props', () => {
        const { getByText } = render(<InputComponent label={LABEL_TEXT}  type="text" value="text Value" className="textClass" />);
        const label = getByText(LABEL_TEXT);
        expect(label).toBeInTheDocument();
    });
});