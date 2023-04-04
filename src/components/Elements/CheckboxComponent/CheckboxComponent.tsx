import React, {ChangeEventHandler} from 'react';

type CheckBoxProps = {
    checked: boolean,
    disabled?: boolean,
    label: string,
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
function CheckboxComponent ({ checked, disabled, label, onChange }: CheckBoxProps) {

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
        </div>
    );
}

export default CheckboxComponent;