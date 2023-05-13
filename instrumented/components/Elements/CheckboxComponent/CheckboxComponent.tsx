import React, {ChangeEventHandler} from 'react';

type CheckBoxProps = {
    id: string,
    checked: boolean,
    disabled?: boolean,
    label: string,
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
function CheckboxComponent ({ id, checked, disabled, label, onChange }: CheckBoxProps) {

    return (
        <div>
            <label>
                <input
                    id={id}
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