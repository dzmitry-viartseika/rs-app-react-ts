import React, {ChangeEventHandler} from 'react';
import ValidationForm from "../../Form/Validation/ValidationForm";

type CheckBoxProps = {
    checked: boolean,
    disabled?: boolean,
    errorMessage?: string,
    label: string,
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
function CheckboxComponent ({ checked, disabled, errorMessage, label, onChange }: CheckBoxProps) {

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                />
                <span className="pl-1">
                    { label }
                </span>
            </label>
            { errorMessage ? <ValidationForm textError={errorMessage} /> : null }
        </div>
    );
}

export default CheckboxComponent;