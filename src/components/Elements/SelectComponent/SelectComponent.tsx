import React, {ChangeEvent} from 'react';
import ValidationForm from "../../Form/Validation/ValidationForm";

interface ISelectListItem {
    value: string,
    name: string,
}

type ISelectProps = {
    items: ISelectListItem[],
    errorMessage?: string,
    value: string,
    label: string,
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
function SelectComponent ({ items, errorMessage, value, onChange, label }: ISelectProps) {

    return (
        <div>
            <label>
                { label }
                <select  value={value} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="">Select an option</option>
                    { items.map((item: ISelectListItem) => {
                       return <option key={item.value} value={item.value}>{item.name}</option>
                    }) }
                </select>
            </label>
            { errorMessage ? <ValidationForm textError={errorMessage} /> : null }
        </div>
    );
}

export default SelectComponent;